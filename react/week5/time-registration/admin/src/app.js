const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

const admin = require("./admin.js");
const {
  getUser,
  getUserType,
  createShift,
  getShifts,
  getAllEmployeesShifts
} = require("./database");
const decodeToken = require("./helpers/authHelper");

app.get("/auth", async (req, res) => {
  try {
    const result = await decodeToken(req);
    const userType = await getUserType(result.uid);
    res.json(userType);
  } catch (err) {
    res.status(401);
    res.send(err);
  }
});

app.post("/shifts", async (req, res) => {
  const result = await decodeToken(req);

  createShift({ ...req.body, uid: result.uid });
  res.json({ message: "Added to DB" });
});

app.get("/shifts", async (req, res) => {
  const result = await decodeToken(req);
  const { userType } = await getUserType(result.uid);
  const dataAllShifts = await getAllEmployeesShifts();
  const dataUserShifts = await getShifts(result.uid);
  if (result.uid) {
    if (userType === "employer") res.json(dataAllShifts);
    else res.json(dataUserShifts);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
