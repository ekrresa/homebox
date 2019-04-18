var usersDB = require("../database").customers;
var Movie = require("../Store/movie");

function User(name, email) {
  this.name = name;
  this.email = email;

  usersDB.push(this);
}

User.prototype.readMovie = function(title) {
  return Movie.getMovie(title);
};

User.prototype.getAllMovies = function() {
  return Movie.getAllMovies();
};

module.exports = User;
