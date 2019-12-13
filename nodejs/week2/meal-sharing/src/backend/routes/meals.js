const express = require("express");
const appendReviewsToAllMeals = require("../meal-reviews-func.js");

const app = express();
const dataMeals = appendReviewsToAllMeals();

// Respond with the json for all the meals.
// maxPrice	- Get meals that has a price smaller than maxPrice - /meals?maxPrice=90
// title - Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde - /meals?title="Indian platter"
// createdAfter	- Get meals that has been created after the date - /meals?createdAfter=2019-04-05
// limit - Only specific number of meals - /meals?limit=4

app.get('/', (req, res) => {
    const {maxPrice} = req.query;
    const {limit} = req.query;
    const {title} = req.query;
    const {createdAfter} = req.query;
     
    if (maxPrice) {
        const mealsMaxPrice = dataMeals.filter(meal => meal.price <= parseInt(maxPrice));
        if (mealsMaxPrice.length === 0) {
            res.status(404);
            res.send('No meals in the price range');
            return;
        } 
        res.send(mealsMaxPrice);
    } else if (title) {
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
        const regex = limit.match(/[0-9]/g);
        const mealsLimit = dataMeals.slice(0, num);
        if (!regex) { 
            res.status(400);
            res.send(`Bad request, ${limit.trim()} is not a number`);
            return;
        }
        res.send(mealsLimit);
    } else {
        res.json(dataMeals);
    }
});

// Respond with the json for the meal with the corresponding id

app.get('/:id', (req, res) => {
    const {id} = req.params;
    if (!parseInt(id)) {
        res.status(400);
        res.send('Bad request');
        return;
    }
    const meal = dataMeals.filter(meal => meal.id === parseInt(id));
    if (meal.length === 0) {
        res.status(404);
        res.send('Meal with the corresponding id is not found');
    } else {
        res.send(meal);
    }
});

module.exports = app;
