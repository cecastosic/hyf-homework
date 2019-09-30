//Write a function that finds the shortest word of an array of words

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWord(array) {
    const words = [];

    for (let i = 0; i < array.length; i++) {
        words.push(array[i].length);
    }

    const min = Math.min(...words);
    const idx = words.indexOf(min);

    return array[idx];
}


console.log(`The shortest word is ${shortestWord(danishWords)}.`); // returns 'ø'


