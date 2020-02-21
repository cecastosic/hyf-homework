const express = require("express");

const app = express();
const port = 3000;

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
app.get("/numbers/add", (req, res) => {
    const { first, second } = req.query;
    if (first && second) {
        if (!isNaN(parseInt(first)) && !isNaN(parseInt(second))) {
            const sum = parseInt(first) + parseInt(second);
            res.send(`The result is ${sum}`);
        } else {
            res.send('Both parameters should be numbers')
        }
    }
    else res.send(`You should enter two parameters for example /numbers/add?first=2&second=5`);
});

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
app.get("/numbers/multiply/:first/:second", (req, res) => {
    const { first, second } = req.params;
    if (first && second) {
        if (!isNaN(parseInt(first)) && !isNaN(parseInt(second))) {
            const multiplication = parseInt(first) * parseInt(second);
            res.send(`The result is ${multiplication}`);
        } else {
            res.send('Both parameters should be numbers')
        }
    }
});

app.get("/numbers/multiply", (req, res) => {
    res.send('To get a result you should enter numbers, for example /numbers/multiply/2/5')
});

app.listen(port, console.log(`Server started on port ${port}`));