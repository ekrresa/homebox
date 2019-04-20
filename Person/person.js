var usersDB = require("../database").customers;
var Movie = require("../Store/movie");

function Person(name, email) {
  this.name = name;
  this.email = email;
  this.id = usersDB.length > 0 ? usersDB[usersDB.length - 1].id + 1 : 1;

  usersDB.push(this);
}

Person.prototype.readMovie = function(title) {
  return Movie.getMovie(title);
};

Person.prototype.getAllMovies = function() {
  return Movie.getAllMovies();
};

module.exports = Person;
