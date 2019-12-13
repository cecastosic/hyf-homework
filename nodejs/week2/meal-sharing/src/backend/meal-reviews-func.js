const fs = require("fs");

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, 
// add these reviews to each meal in the form of an array. For meals that do not have any reviews, 
// the "reviews" property will be an empty array. 

const appendReviewsToAllMeals = () => {
    const dataMeals = JSON.parse(fs.readFileSync(__dirname + '/data/meals.json', "utf-8"));
    const dataReviews = JSON.parse(fs.readFileSync(__dirname + '/data/reviews.json', "utf-8"));
    
    return dataMeals.map(meal => {
        meal.reviews = dataReviews.filter(review => review.mealId === meal.id);
        return meal;
        }
    );
}
    
module.exports = appendReviewsToAllMeals;