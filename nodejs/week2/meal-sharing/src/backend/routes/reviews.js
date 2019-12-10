const express = require('express');
const fs = require('fs');

const app = express();

// Respond with the json for all reviews

const dataReviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json', "utf-8"));

app.get('/', (req, res) => res.json(dataReviews));

// Respond with the json for the review with the corresponding id

app.get('/:id', (req, res) => {
    const {id} = req.params;
    const review = dataReviews.filter(review => review.id === parseInt(id));
    res.send(review);
});

module.exports = app;