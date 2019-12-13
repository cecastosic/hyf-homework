const express = require("express");
const fs = require("fs");

const app = express();

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, 
// add these reviews to each meal in the form of an array. For meals that do not have any reviews, 
// the "reviews" property will be an empty array. 

const dataMeals = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json', "utf-8"));
const dataReviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json', "utf-8"));

meal.reviews = dataReviews.filter(review => review.mealId === meal.id);

app.get('/', (req, res) => res.json(dataMeals));

module.exports = app;
//module.exports = mealsWithReviews;