const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

let key = "";
app.get("/calculator", (req, res) => {
  // All the numbers that should be inputtet should be gotten from the query parameters:
  // calculator?firstParam=1&secondParam=2...
  const { firstParam, secondParam } = req.query;
  const arrQueryNumbers = [firstParam].concat(secondParam);
  const areAllParametersNotNumbers =
    arrQueryNumbers.filter(value => Object.is(parseInt(value), NaN)).length > 0;

  if (areAllParametersNotNumbers) res.send("Parameters are not numbers");
  if (key === "add") {
    const addition = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum + parseInt(value)),
      0
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Addition is equal to ${addition}.`
    );
  } else if (key === "substract") {
    const substraction = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum - parseInt(value))
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Substraction is equal to ${substraction}.`
    );
  } else if (key === "multiply") {
    const multiplication = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum * parseInt(value)),
      1
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Multiplication is equal to ${multiplication}.`
    );
  } else if (key === "divide") {
    const division = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum / parseInt(value))
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Division is equal to ${division}.`
    );
  } else {
    const addition = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum + parseInt(value)),
      0
    );
    const substraction = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum - parseInt(value))
    );
    const multiplication = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum * parseInt(value)),
      1
    );
    const division = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum / parseInt(value))
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. 
Addition is equal to ${addition}.
Substraction is equal to ${substraction}.
Multiplication is equal to ${multiplication}.
Division is equal to ${division}.`
    );
  }
});

app.get("/calculator/add", (req, res) => {
  const numbers = req.query;
  const arrQueryNumbers = [].concat.apply([], Object.values(numbers));
  if (
    arrQueryNumbers.filter(value => Object.is(parseInt(value), NaN)).length > 0
  )
    res.send("Parameters are not numbers");
  else {
    const addition = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum + parseInt(value)),
      0
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Addition is equal to ${addition}.`
    );
  }
});

app.get("/calculator/substract", (req, res) => {
  const numbers = req.query;
  const arrQueryNumbers = [].concat.apply([], Object.values(numbers));
  if (
    arrQueryNumbers.filter(value => Object.is(parseInt(value), NaN)).length > 0
  )
    res.send("Parameters are not numbers");
  else {
    const substraction = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum - parseInt(value))
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Substraction is equal to ${substraction}.`
    );
  }
});

app.get("/calculator/multiply", (req, res) => {
  const numbers = req.query;
  const arrQueryNumbers = [].concat.apply([], Object.values(numbers));
  if (
    arrQueryNumbers.filter(value => Object.is(parseInt(value), NaN)).length > 0
  )
    res.send("Parameters are not numbers");
  else {
    const multiplication = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum * parseInt(value)),
      1
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Multiplication is equal to ${multiplication}.`
    );
  }
});

app.get("/calculator/divide", (req, res) => {
  const numbers = req.query;
  const arrQueryNumbers = [].concat.apply([], Object.values(numbers));
  if (
    arrQueryNumbers.filter(value => Object.is(parseInt(value), NaN)).length > 0
  )
    res.send("Parameters are not numbers");
  else {
    const division = arrQueryNumbers.reduce(
      (sum, value) => (sum = sum / parseInt(value))
    );
    res.send(
      `Numbers are: ${arrQueryNumbers}. Division is equal to ${division}.`
    );
  }
});

app.post("/calculator", (req, res) => {
  key = req.body.key;
  res.send("Sent key");
});

app.listen(3000, () => console.log("Server started on port 3000"));
