const express = require('express');
const fs = require('fs');

const app = express();

// Respond with the json for all reservations

const dataReservations = JSON.parse(fs.readFileSync(__dirname + '/../data/reservations.json', "utf-8"));

app.get('/', (req, res) => res.json(dataReservations));

// Respond with the json for the reservation with the corresponding id

app.get('/:id', (req, res) => {
    const {id} = req.params;
    const reservation = dataReservations.filter(reservation => reservation.id === parseInt(id));
    res.send(reservation);
});

module.exports = app;