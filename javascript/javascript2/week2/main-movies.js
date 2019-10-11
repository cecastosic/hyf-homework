//const movies = require('./movies.js');
console.log(movies);

// Create an array of movies containing the movies with a short title (you define what short means)
const shortTitles = movies.filter(movie => movie.title.length < 5 ? true : false);
console.log(shortTitles);


// Create an array of movie titles with long movie titles
const longTitles = movies.filter(movie => movie.title.length > 12 ? true : false);
console.log(longTitles);

// Count the number of movies made between 1980-1989 (including both the years)
const eighties = movies.reduce((sum, movie) => (movie.year >= 1980 && movie.year <= 1989) ? sum += 1 : sum, 0);
console.log(eighties);

// Create a new array that has an extra key called tag. 
//The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const rating = movies
    .forEach(movie => {
        if (movie.rating >= 7) {
            movie.tag = 'Good';
        } else if (movie.rating >= 4 && movie.rating < 7) {
            movie.tag = 'Average';
        } else {
            movie.tag = 'Bad';
        }
    });

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
// Now map the movies array to only the rating of the movies.
const highRating = movies
    .filter(movie => movie.rating > 6 ? true : false)
    .map(movie => movie.rating);
console.log(highRating);

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. 
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. 
// Can you make sure the search is case insensitive?
const specificTitles = movies.reduce((sum, movie) => (movie.title.search(/Surfer/i) >= 0 || movie.title.search(/Alien/i) >= 0 || movie.title.search(/Benjamin/i) >= 0) ? sum += 1 : sum, 0);
console.log(specificTitles);


// Create an array of movies where a word in the title is duplicated. 
// Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
//const splitTitles = movies.map(movie => movie.title.split(' '));
const duplicatedTitles = [];

movies
    .map(movie => movie.title.split(' '))
    .forEach(title => title.filter((word, index) => title.indexOf(word) != index ? duplicatedTitles.push(title.join(' ')) : false));

console.log(duplicatedTitles);


// Find the word that is mostly duplicated using sort Optional
const duplicatedWords = [];

movies
    .map(movie => movie.title.split(' '))
    .forEach(title => title.filter((word, index) => title.indexOf(word) != index ? duplicatedWords.push(word) : false))

const sortedDuplicatedWords = duplicatedWords.sort();
const objWords = [];
for (let i = 0; i < sortedDuplicatedWords.length; i = i + count) {
    count = 1;
    for (let j = i + 1; j < sortedDuplicatedWords.length; j++) {
        if (sortedDuplicatedWords[i] === sortedDuplicatedWords[j])
            count++;
    }
    objWords.push({
        'word': sortedDuplicatedWords[i],
        'count': count
    });
}

const sortedObjWords = objWords.sort((a, b) => (b.count > a.count) ? 1 : -1);
console.log(`The nost duplicated word is ${sortedObjWords[0].word}, it occurs ${sortedObjWords[0].count} times.`);

// Calculate the average rating of all the movies using reduce. Optional
const averageRating = (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(2);
console.log(averageRating);


// Count the total number of Good, Average and Bad movies using reduce. Optional
const goodMovies = movies.reduce((sum, movie) => movie.tag === 'Good' ? sum += 1 : sum, 0);
const averageMovies = movies.reduce((sum, movie) => movie.tag === 'Average' ? sum += 1 : sum, 0);
const badMovies = movies.reduce((sum, movie) => movie.tag === 'Bad' ? sum += 1 : sum, 0);

console.log(`The total number of GOOD movies is ${goodMovies}.
\nThe total number of AVERAGE movies is ${averageMovies}.
\nThe total number of BAD movies is ${badMovies}.`);