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

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "./../../react/build")));

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

app.post("/api/shifts", async (req, res) => {
  const result = await decodeToken(req);

  createShift({ ...req.body, uid: result.uid });
  res.json({ message: "Added to DB" });
});

app.get("/api/shifts", async (req, res) => {
  const result = await decodeToken(req);
  const { userType } = await getUserType(result.uid);
  const dataAllShifts = await getAllEmployeesShifts();
  const dataUserShifts = await getShifts(result.uid);
  if (result.uid) {
    if (userType === "employer") res.json(dataAllShifts);
    else res.json(dataUserShifts);
  }
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, "./../../react/build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
