const express = require("express");
const meals = require("../meal-reviews-func.js");

const app = express();
const dataMeals = meals();

// Respond with the json for a random meal (including it's reviews)

app.get('/', (req, res) => {
    const randomNumber = Math.ceil(Math.random() * dataMeals.length);
    const randomMeal = dataMeals.filter(meal => meal.id === randomNumber)
    res.json(randomMeal);
});

module.exports = app;
