const express = require("express");
const fs = require("fs");

const app = express();

// Respond with the json for a random meal (including it's reviews)

const dataMeals = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json', "utf-8"));
const dataReviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json', "utf-8"));

meal.reviews = dataReviews.filter(review => review.mealId === meal.id);

app.get('/', (req, res) => {
    const randomNumber = Math.ceil(Math.random() * dataMeals.length);
    const randomMeal = dataMeals.filter(meal => meal.id === randomNumber)
    res.json(randomMeal);
});

module.exports = app;
//module.exports = mealsWithReviews;