const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");


// api/reviews - Returns all reviews
router.get("/", (request, response) => {
    pool.query("SELECT * FROM reviews", function(error, results, fields) {
        // error will be an Error if one occurred during the query
        if (error) {
            return response.send(error);
        }
        // results will contain the results of the query
        response.json(results);
    // fields will contain information about the returned results fields (if any)
  });
});

module.exports = router;