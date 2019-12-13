const express = require("express");
const meals = require("../meal-reviews-func.js");

const app = express();
const dataMeals = meals();

// Respond with the json for all the meals (including it's reviews) that can fit lots of people

const largeMeals = dataMeals.filter(meal => meal.maxNumberOfGuests >= 7);

app.get('/', (req, res) => res.json(largeMeals));

module.exports = app;