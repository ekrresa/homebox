var User = require("./user");

function GoldUser(name, email) {
  User.call(this, name, email);
  this.cart = [];
  this.level = "gold";
}

GoldUser.prototype = Object.create(User.prototype);
GoldUser.prototype.constructor = GoldUser;

GoldUser.prototype.addMovieToCart = function(title) {
  if (this.cart.length < 2) {
    var movie = this.readMovie(title);
    this.cart.push(movie);
    return "Movie added to cart";
  }
  return "Sorry. Can't rent more than two movies. Please upgrade to platinum";
};

// var mike = new GoldUser("mike", "mike@gmail.com", "pass");
// mike.rentMovie("Fear");
// mike.rentMovie("Star Trek");
// mike.rentMovie("Fear");
// console.log("Cart", mike.cart);
