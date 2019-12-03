const express = require("express");
const app = express();

// Routers - Inside the index.js file create routes using express
const mealsRouter = require('./routes/meals.js');
const cheapMealsRouter = require('./routes/cheap-meals.js');
const largeMealsRouter = require('./routes/large-meals.js');
const mealRouter = require('./routes/meal.js');
const reservationsRouter = require('./routes/reservations.js');
const reservationRouter = require('./routes/reservation.js');

// make a middleware the logs the the date and the request's method, each time the server gets a request
app.use((req,res, next) => {
    console.log('Date:', new Date().toDateString());
    console.log('Request method:', req.method);
    next();
});

app.use('/meals', mealsRouter);
app.use('/cheap-meals', cheapMealsRouter);
app.use('/large-meals', largeMealsRouter);
app.use('/meal', mealRouter);
app.use('/reservations', reservationsRouter);
app.use('/reservation', reservationRouter);

app.get('/', (req, res) => res.send('Error no page found'));

app.listen(3000, () => console.log('server started on port 3000'));