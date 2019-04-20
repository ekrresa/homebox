var Person = require("./person");

function Customer(name, email, monthlyFee) {
  if (monthlyFee === 1000) {
    Person.call(this, name, email);
    this.cart = [];
  } else {
    throw "Invalid fee";
  }
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.addMovieToCart = function(title) {
  var movie = this.readMovie(title);

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

Customer.prototype.checkout = function(title) {
  if (this.cart.length > 0) {
    this.cart.length = 0;
    return "Thanks for the rental. Please return before due date";
  }
  return "Cart is empty";
};

module.exports = Customer;
