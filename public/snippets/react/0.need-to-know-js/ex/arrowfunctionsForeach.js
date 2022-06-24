const movies = [
  {
    name: "Hard Boiled",
    genre: "Hong Kong Action",
  },
  {
    name: "LOTR",
    genre: "Fantasy",
  },
];
function showMovie(movie) {
  console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
}

movies.forEach(showMovie);
