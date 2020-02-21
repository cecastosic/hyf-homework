const express = require("express");
const { appendReviewsToAllMeals } = require("../meal-reviews-func.js");

const app = express();
const dataMeals = appendReviewsToAllMeals();

// Respond with the json for all the meals.
// maxPrice	- Get meals that has a price smaller than maxPrice - /meals?maxPrice=90
// title - Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde - /meals?title="Indian platter"
// createdAfter	- Get meals that has been created after the date - /meals?createdAfter=2019-04-05
// limit - Only specific number of meals - /meals?limit=4

app.get("/", (req, res) => {
  const { maxPrice, limit, title, createdAfter } = req.query;

  if (maxPrice) {
    const num = parseInt(maxPrice.trim());
    if (!isNaN(num)) {
      const mealsMaxPrice = dataMeals.filter(meal => meal.price <= num);
      if (mealsMaxPrice.length == 0) {
        return res.status(404).send("No meals in the price range");
      }
      return res.send(mealsMaxPrice);
    }
    return res
      .status(400)
      .send(`Bad request, ${maxPrice.trim()} is not a number`);
  }
  if (title) {
    const titleTrim = title.trim().replace(/[^\w\s]/gi, "");
    const mealsTitle = dataMeals.filter(
      meal => meal.title.search(new RegExp(titleTrim, "i")) >= 0
    );
    if (mealsTitle.length === 0) {
      return res.status(404).send(`No meal matched with the word ${titleTrim}`);
    }
    return res.send(mealsTitle);
  }
  if (createdAfter) {
    const dateCreatedAfter = new Date(createdAfter);
    if (!isNaN(dateCreatedAfter) && dateCreatedAfter instanceof Date) {
      const mealsDate = dataMeals.filter(
        meal => new Date(meal.createdAt) >= dateCreatedAfter
      );
      console.log(mealsDate);
      if (mealsDate.length === 0) {
        return res
          .status(404)
          .send(`No meal that has been created after ${createdAfter}`);
      }
      return res.send(mealsDate);
    }
    return res.status(400).send(`Bad request, ${createdAfter} is not a date`);
  }
  if (limit) {
    const num = parseInt(limit.trim());
    if (!isNaN(num)) {
      const mealsLimit = dataMeals.slice(0, num);
      return res.send(mealsLimit);
    }
    return res.status(400).send(`Bad request, ${limit.trim()} is not a number`);
  }
  return res.json(dataMeals);
});

// Respond with the json for the meal with the corresponding id

app.get("/:id", (req, res) => {
  const { id } = req.params;
  if (!isNaN(parseInt(id))) {
    const meal = dataMeals.find(meal => meal.id === parseInt(id));
    if (meal.length === 0) {
      return res
        .status(404)
        .send("Meal with the corresponding id is not found");
    }
    res.send(meal);
  }
  return res.status(400).send(`Bad request, ${id} is not a number`);
});

module.exports = app;
