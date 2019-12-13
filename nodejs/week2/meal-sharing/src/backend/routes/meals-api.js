const express = require("express");
const appendReviewsToAllMeals = require("../meal-reviews-func.js");

const app = express();
const dataMeals = appendReviewsToAllMeals();

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
