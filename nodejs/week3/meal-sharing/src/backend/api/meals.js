const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

// api/meals/ - Returns all meals
router.get("/", (request, response) => {
    pool.query("SELECT * FROM meals", function(error, results, fields) {
        // error will be an Error if one occurred during the query
        if (error) {
            return response.send(error);
        }
        // results will contain the results of the query
        response.json(results);
    // fields will contain information about the returned results fields (if any)
  });
});

// api/meals/{id} - Returns meal by id
router.get('/:id', (request, response) => {
    const {id} = request.params;
    if (!parseInt(id)) {
        response.status(400);
        response.send('Bad request');
        return;
    }
    pool.query(`SELECT * FROM meals WHERE id = ${id}`, function(error, results, fields) {
        if (error) {
            return response.send(error);
        }
        if (results.length === 0) {
            response.send('Meal with the corresponding id is not found');
        }
        else {
            response.json(results);
        }
  });
});

// GET api/meals/ query parameters
// maxPrice	- Get meals that has a price smaller than maxPrice - /meals?maxPrice=90
// title - Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde - /meals?title="Indian platter"
// createdAfter	- Get meals that has been created after the date - /meals?createdAfter=2019-04-05
// limit - Only specific number of meals - /meals?limit=4



// api/meals/ - POST - Adds a new meal	

// api/meals/{id} - PUT	- Updates the meal by id	

// api/meals/{id} -DELETE - Deletes the meal by id

module.exports = router;