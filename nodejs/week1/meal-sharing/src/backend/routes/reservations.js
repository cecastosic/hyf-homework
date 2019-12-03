const express = require('express');
const fs = require('fs');

const app = express();

// Respond with the json for all reservations

const dataReservations = JSON.parse(fs.readFileSync(__dirname + '/../data/reservations.json', "utf-8"));

app.get('/', (req, res) => res.json(dataReservations));

module.exports = app;