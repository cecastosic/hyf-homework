const express = require("express");
const meals = require("../meal-reviews-func.js");

const app = express();

app.get('/', (req, res) => res.json(meals()));

module.exports = app;