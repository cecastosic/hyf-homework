//Write a function that finds the shortest word of an array of words

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWord(array) {
    array.sort(function(a, b){return a.length - b.length})
    return array[0];
}

console.log(`The shortest word is ${shortestWord(danishWords)}.`); // returns 'ø'


