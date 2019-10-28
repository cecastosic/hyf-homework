const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

// Fetch movies from this api:
const movies = fetch(url)
  .then(response => response.json())
  .then(movies => {
    // Create an array of bad movies
    const badMovies = movies.filter(movie => movie.rating <= 5);
    return badMovies;
  })
  .then(movies => {
    // Create an array of bad movies since year 2000
    const badMovies2000 = movies.filter(movie => movie.year >= 2000);
    return badMovies2000;
  })
  .then(movies => {
    // Create an array of the titles of the bad movies since year 2000
    const badMovies2000Titles = movies.map(movie => movie.title);
    return badMovies2000Titles;
  });

console.log(movies);
