var adminsDB = require("../database").admins;
// var moviesDB = require("../database").movies;
var Movie = require("./movie");

function Admin(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = adminsDB.length > 0 ? adminsDB[adminsDB.length - 1].id + 1 : 1;
}

Admin.prototype.addMovie = function(title, genre, quantity, price, year) {
  Movie.createMovie(title, genre, quantity, price, year);
};

Admin.prototype.getMoviefromDB = function(title) {
  var movie = Movie.getMovie(title);
  return movie;
};

Admin.prototype.readAllMovies = function() {
  var collection = Movie.getAllMovies();

  if (collection) {
    return collection;
  }
  return "Err";
};

Admin.prototype.editMultipleProps = function(title, updateObj) {
  return Movie.editMovie(title, updateObj);
};

Admin.prototype.editMovie = function(title, prop, newValue) {
  return Movie.editMovie(title, prop, newValue);
};

Admin.prototype.deleteMovie = function(title, year) {
  return Movie.deleteMovie(title, year);
};
