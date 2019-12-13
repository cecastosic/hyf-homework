const express = require("express");
const meals = require("../meal-reviews-func.js");

const app = express();
const dataMeals = meals();

// Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)

const cheapMeals = dataMeals.filter(meal => meal.price <= 75);

app.get('/', (req, res) => res.json(cheapMeals));

module.exports = app;