var moviesDB = require("../database").movies;

function Movie(title, genre, year) {
  this.title = title;
  this.genre = genre;
  this.year = year;
  this.id = moviesDB.length > 0 ? moviesDB[moviesDB.length - 1].id + 1 : 1;

  moviesDB.push(this);
}

Movie.createMovie = function(title, genre, price, year) {
  return new Movie(title, genre, price, year);
};

Movie.getMovie = function(name) {
  for (const movie of moviesDB) {
    if (movie.title === name) {
      return movie;
    }
  }
  return false;
};

Movie.getAllMovies = function() {
  if (moviesDB.length > 0) {
    return moviesDB;
  }
  return false;
};

Movie.editMultipleProps = function(title, updateObj) {
  var movie = Movie.getMovie(title);

  if (movie) {
    for (const key in movie) {
      if (updateObj.hasOwnProperty(key)) {
        movie[key] = updateObj[key];
      }
    }
    return movie;
  } else {
    return "Movie not found";
  }
};

Movie.editMovie = function(title, prop, newValue) {
  var movie = Movie.getMovie(title);

  if (movie && movie.hasOwnProperty(prop)) {
    movie[prop] = newValue;
    return movie;
  }
  return "Movie not found";
};

Movie.deleteMovie = function(title, year) {
  var len = moviesDB.length;
  for (let index = 0; index < len; index++) {
    if (moviesDB[index].title === title && moviesDB[index].year === year) {
      moviesDB.splice(index, 1);
      return "Movie Deleted";
    }
  }
  return "Movie not found";
};

module.exports = Movie;
