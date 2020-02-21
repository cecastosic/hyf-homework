const dataMeals = require("./data/meals");
const dataReviews = require("./data/reviews");

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID,
// add these reviews to each meal in the form of an array. For meals that do not have any reviews,
// the "reviews" property will be an empty array.

const appendReviewsToAllMeals = () => {
  return dataMeals.map(meal => {
    meal.reviews = dataReviews.filter(review => review.mealId === meal.id);
    return meal;
  });
};

module.exports = {
  appendReviewsToAllMeals
};
