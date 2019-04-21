var adminsDB = require("../database").admins;
var Movie = require("./movie");
var Rental = require("./rental");

function Admin(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = adminsDB.length > 0 ? adminsDB[adminsDB.length - 1].id + 1 : 1;
}

Admin.prototype.addMovie = function(title, genre, quantity, year) {
  Movie.createMovie(title, genre, quantity, year);
};

Admin.prototype.getMoviefromDB = function(title) {
  var movie = Movie.getMovie(title);
  return movie === false ? "Movie not found" : movie;
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

Admin.prototype.getRental = function() {
  return Rental.readOne(id);
};

Admin.prototype.getRentalByCustomer = function() {
  var rental = Rental.getRentalByCustomer();
  return rental.length > 0 ? rental : "No rentals by this customer";
};

Admin.prototype.viewRentalsInDB = function() {
  return Rental.viewRentals();
};

Admin.prototype.editRental = function(id, prop, newValue) {
  return Rental.editRentals(id, prop, newValue);
};

module.exports = Admin;
