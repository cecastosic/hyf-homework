const express = require("express");
const fs = require("fs");

const app = express();

// Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)

const dataMeals = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json', "utf-8"));
const dataReviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json', "utf-8"));

dataMeals.map(meal => {
    meal.reviews = [];
    for (let i = 0; i < dataReviews.length; i++) {
        if (dataReviews[i].mealId === meal.id) {
            meal.reviews.push(dataReviews[i]);
        }
    }
});

const cheapMeals = dataMeals.filter(meal => meal.price <= 75);

app.get('/', (req, res) => res.json(cheapMeals));

module.exports = app;