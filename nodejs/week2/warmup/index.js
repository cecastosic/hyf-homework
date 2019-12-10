const express = require("express");

const app = express();
const port = 3000;

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
app.get("/numbers/add", (req, res) => {
    const numbers = req.query;
    const first = numbers.first;
    const second = numbers.second;
    const sum = parseInt(first) + parseInt(second);
    res.send(`The result is ${sum}`);
});

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
app.get("/numbers/multiply/:first/:second", (req, res) => {
    const numbers = req.params;
    const first = numbers.first;
    const second = numbers.second;
    const multiplication = parseInt(first) * parseInt(second);
    res.send(`The result is ${multiplication}`);
});




app.listen(port, console.log(`Server started on port ${port}`));