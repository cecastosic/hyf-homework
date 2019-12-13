const express = require('express');
const fs = require('fs');

const app = express();

// Respond with the json for a random reservation

const dataReservations = JSON.parse(fs.readFileSync(__dirname + '/../data/reservations.json', "utf-8"));

app.get('/', (req, res) => {
    const randomNumber = Math.ceil(Math.random() * dataReservations.length);
    const randomReservation = dataReservations.filter(reservation => reservation.id === randomNumber);
    res.json(randomReservation);
});

module.exports = app;