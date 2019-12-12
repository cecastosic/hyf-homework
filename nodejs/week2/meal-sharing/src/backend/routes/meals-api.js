const express = require("express");
const fs = require("fs");

const app = express();

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, 
// add these reviews to each meal in the form of an array. For meals that do not have any reviews, 
// the "reviews" property will be an empty array. 

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

// title - Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde - /meals?title="Indian platter"
// createdAfter	- Get meals that has been created after the date - /meals?createdAfter=2019-04-05
// limit - Only specific number of meals - /meals?limit=4

app.get('/', (req, res) => {
    const {limit} = req.query;
    const {title} = req.query;
    const {createdAfter} = req.query;
     
    if (title) {
        const titleTrim = title.trim().replace(/[^\w\s]/gi, '');
        const mealsTitle = dataMeals.filter(meal => meal.title.search(new RegExp(titleTrim, 'i')) >= 0);
        if (mealsTitle.length === 0) {
            res.status(404);
            res.send(`No meal matched with the word ${titleTrim}`);
            return;
        }
        res.send(mealsTitle);
    } else if (createdAfter) {
        const mealsDate = dataMeals.filter(meal => new Date(meal.createdAt) >= new Date(createdAfter));
        console.log(mealsDate);
        if (mealsDate.length === 0) {
            res.status(404);
            res.send(`No meal that has been created after ${createdAfter}`);
            return;
        }
        res.send(mealsDate);
    } else if (limit) {
        const num = parseInt(limit.trim());
        const mealsLimit = dataMeals.slice(0, num);
        if (Object.is(num, NaN)) { 
            res.status(400);
            res.send(`Bad request, ${limit.trim()} is not a number`);
            return;
        }
        res.send(mealsLimit);
    } else {
        res.json(dataMeals);
    }
});

module.exports = app;
