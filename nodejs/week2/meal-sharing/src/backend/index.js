const express = require("express");
const app = express();

// Routers - Inside the index.js file create routes using express
const mealsApiRouter = require("./routes/meals-api.js");
const reservationsRouter = require("./routes/reservations.js");
const reviewsRouter = require("./routes/reviews.js");

// make a middleware the logs the the date and the request's method, each time the server gets a request
app.use((req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} request received for path: ${req.originalUrl}`
  );
  next();
});

app.use("/api/meals", mealsApiRouter);
app.use("/api/reservations", reservationsRouter);
app.use("/api/reviews", reviewsRouter);

app.get("/", (req, res) => res.send("Main page"));

app.listen(3000, () => console.log("server started on port 3000"));
