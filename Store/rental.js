var rentalDB = require("../database").rentals;

function Rental(id, cart) {
  var date = new Date();
  this.id = rentalDB.length > 0 ? rentalDB[rentalDB.length - 1].id + 1 : 1;
  this.customer_id = id;
  this.movies = cart;
  this.status = "open";
  this.rentDate = date.toDateString();
  this.dueDate = addDays(5);
}

Rental.readOne = function(id) {
  for (const rental of rentalDB) {
    if (rental.id === id) {
      return rental;
    }
  }
  return false;
};

Rental.readByCustomer = function(cus_id) {
  var customerRentals = [];
  for (const rental of rentalDB) {
    if (rental.customer_id === cus_id) {
      customerRentals.push(rental);
    }
  }
  return customerRentals;
};

Rental.viewRentals = function() {
  return rentalDB;
};

Rental.editRentals = function(id, prop, newValue) {
  var rental = Rental.prototype.readOne(id);

  if (rental && rental.hasOwnProperty(prop)) {
    rental[prop] = newValue;
    return rental;
  }
  return "Rental not found";
};

// Add days to current date
function addDays(days) {
  var time = new Date().getTime();
  var newTime = time + 86400000 * days;
  return new Date(newTime).toDateString();
}

module.exports = Rental;
