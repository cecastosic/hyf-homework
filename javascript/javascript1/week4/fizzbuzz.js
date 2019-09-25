//Create a function that prints the numbers from 1 to 100. 
//But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
//For numbers which are multiples of both three and five print FizzBuzz.

const numbers1 = [];
function fizzBuzz1() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numbers.push('FizzBuzz');
        } else if (i % 3 === 0) {
            numbers.push('Fizz');
        } else if (i % 5 === 0) {
            numbers.push('Buzz');
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}

//console.log(fizzBuzz1());


//When that works. Make the two numbers for multiples into parameters. 

const numbers = [];
function fizzBuzz(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        for (let i = 1; i <= 100; i++) {
            if (i % num1 === 0 && i % num2 === 0) {
                numbers.push('FizzBuzz');
            } else if (i % num1 === 0) {
                numbers.push('Fizz');
            } else if (i % num2 === 0) {
                numbers.push('Buzz');
            } else {
                numbers.push(i);
            }
        }
        return numbers;
    }
    else {
        return 'The parameters are not numbers'
    }
}


console.log(fizzBuzz(4, 12));
console.log(fizzBuzz('', true));

