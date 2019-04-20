var rentalDB = require("../database").rentals;

function Rental(id, cart) {
  var date = new Date();
  this.id = rentalDB.length > 0 ? rentalDB[rentalDB.length - 1].id + 1 : 1;
  this.customer_id = id;
  this.movies = cart;
  this.status = "Not Due";
  this.rentDate = date.toDateString();
  this.dueDate = addDays(5);
}

Rental.prototype.viewRentals = function() {
  return rentalDB;
};

// Add days to current date
function addDays(days) {
  var time = new Date().getTime();
  var newTime = time + 86400000 * days;
  return new Date(newTime).toDateString();
}

module.exports = Rental;
