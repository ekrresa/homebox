var Person = require("./person");
var Rental = require("../Store/rental");

function Customer(name, email, monthlyFee) {
  if (monthlyFee === 1000) {
    Person.call(this, name, email);
    this.cart = [];
  } else {
    throw "Incorrect fee";
  }
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

// Checks if movie is already present in cart
// Adds it if absent and if movie is available.
// Returns message if found in cart
Customer.prototype.addMovieToCart = function(title) {
  var movieCheck = false;

  for (const movie of this.cart) {
    if (movie.title === title) {
      movieCheck = true;
    }
  }

  if (movieCheck === false) {
    var movie = this.readMovie(title);
  } else {
    return "Can't add two or more movies to cart";
  }

  if (movie) {
    this.cart.push(movie);
    return "Movie added to cart";
  } else {
    return "Movie is not available";
  }
};

Customer.prototype.removeMovieFromCart = function(title) {
  var len = this.cart.length;
  for (let index = 0; index < len; index++) {
    if (this.cart[0].title === title) {
      this.cart.splice(index, 1);
      return "Movie removed from cart";
    }
  }
  return "Movie not found in cart";
};

Customer.prototype.viewCart = function() {
  return this.cart.length > 0 ? this.cart : "Cart empty";
};

Customer.prototype.emptyCart = function() {
  this.cart.length = 0;
};

Customer.prototype.checkout = function() {
  // Check if cart is empty
  if (this.cart.length === 0) {
    return "Cart is empty";
  }

  if (this.cart.length > 4) {
    return "Can't rent more than four movies";
  }

  var oldRentals = Rental.readByCustomer(this.id);

  // Check if customer has rental history
  if (oldRentals.length === 0) {
    var movies = this.cart.slice();
    var rental = new Rental(this.id, movies);
    this.cart.length = 0;
    return "Thanks for the rental. Please return before due date";
  }

  // Check if there's outstanding rental for customer
  for (const item of oldRentals) {
    if (item.status === "open") {
      return "You have an open rental. Return the movies please";
    }
  }
  var rental = new Rental(this.id, this.cart);
  this.cart.length = 0;
  return "Thanks for the rental. Please return before due date";
};

Customer.prototype.viewRentals = function() {
  var rentals = Rental.readByCustomer(this.id);

  if (rentals.length > 0) {
    return rentals;
  }
  return "No rentals for this customer";
};

module.exports = Customer;
