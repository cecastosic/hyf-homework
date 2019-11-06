const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

// // Fetch movies from this api:
// const movies = fetch(url)
//   .then(response => response.json())
//   .then(movies => {
//     // Create an array of bad movies
//     const badMovies = movies.filter(movie => movie.rating <= 5);
//     // Create an array of bad movies since year 2000
//     const badMovies2000 = badMovies.filter(movie => movie.year >= 2000);
//     // Create an array of the titles of the bad movies since year 2000
//     const badMovies2000Titles = badMovies2000.map(movie => movie.title);
//     return badMovies2000Titles;
//   })
//   .catch(err => console.log(err));

// console.log(movies);

async function myFunc() {
  const response = await fetch(url);
  const movies = await response.json();
    // Create an array of bad movies
    const badMovies = movies.filter(movie => movie.rating <= 5);
    // Create an array of bad movies since year 2000
    const badMovies2000 = badMovies.filter(movie => movie.year >= 2000);
    // Create an array of the titles of the bad movies since year 2000
    const badMovies2000Titles = badMovies2000.map(movie => movie.title);
    return badMovies2000Titles;
  }

try {
  console.log(myFunc());
} catch(err) {
  console.log(err);
}
