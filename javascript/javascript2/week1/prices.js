//Make a function that takes an array as parameter and returns the average of that parameter

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function average (array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const avg = (sum/array.length).toFixed(2);
    return avg;
}

//Make a function that takes an array as parameter and returns the median of that parameter

function median(array) {
    array.sort(function(a, b){return a-b});

    const middle = Math.floor(array.length / 2);

    if (array.length % 2)
        return array[middle];

    return (array[middle - 1] + array[middle]) / 2.0;
}

console.log(`The average price is ${average(housePrices)}.`); 
console.log(`The median house price is ${median(housePrices)}.`);

//Now render the prices and the average and median in a web page.
const ul = document.getElementById('prices');

housePrices.forEach((price) => {
    const li = document.createElement('li');
    li.textContent = price;
    ul.appendChild(li);
});

const avgPrice = document.getElementById('average-price');
avgPrice.textContent = average(housePrices);

const medianPrice = document.getElementById('median-price');
medianPrice.textContent = median(housePrices);