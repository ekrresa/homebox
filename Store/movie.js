var moviesDB = require("../database").movies;

function Movie(title, genre, quantity, format, year) {
  this.title = title;
  this.genre = genre;
  this.quantity = quantity;
  this.format = format;
  this.year = year;
  this.id = moviesDB.length > 0 ? moviesDB[moviesDB.length - 1].id + 1 : 1;
}

Movie.createMovie = function(title, genre, quantity, format, year) {
  var movie = new Movie(title, genre, quantity, format, year);
  moviesDB.push(movie);
  return movie;
};

Movie.getMovie = function(name) {
  for (const movie of moviesDB) {
    if (movie.title === name) {
      return movie;
    }
  }
  return false;
};

Movie.editMovie = function(updateObj) {};

module.exports = Movie;
