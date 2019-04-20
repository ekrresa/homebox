var Customer = require("../Person/customer");
var customerDB = require("../database").customers;

describe("Customer Tests", function() {
  var mike;
  var felix;

  beforeEach(function() {
    mike = new Customer("mike", "mike@gmail.com", 1000);
    felix = new Customer("felix", "felix@gmail.com", 1000);
  });

  afterEach(function() {
    customerDB.length = 0;
    mike.emptyCart();
    felix.emptyCart();
  });

  test("should be an instance of Customer", function() {
    expect(mike instanceof Customer).toBe(true);
    expect(felix instanceof Customer).toBe(true);
  });
  test("should throw error if wrong fee is passed in", function() {
    expect(function() {
      new Customer("paul", "paul@gmail.com", 100);
    }).toThrow();
  });
  test("should add movie to cart", function() {
    var result = mike.addMovieToCart("Fear");
    expect(result).toBe("Movie added to cart");
    expect(mike.cart).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: expect.any(String) })])
    );
  });
  test("should check if movie is available", function() {
    expect(mike.addMovieToCart("The Fugitive")).toBe("Movie is not available");
  });
  test("should remove movie from cart", function() {
    felix.addMovieToCart("Salt");
    felix.addMovieToCart("Fear");
    expect(felix.removeMovieFromCart("Salt")).toBe("Movie removed from cart");
  });
  test("should check movie is in cart", function() {
    felix.addMovieToCart("Salt");
    felix.addMovieToCart("Fear");
    expect(felix.removeMovieFromCart("Star Trek")).toBe("Movie not found in cart");
  });
  test("should view movies in cart", function() {
    felix.addMovieToCart("Salt");
    felix.addMovieToCart("Fear");
    expect(felix.viewCart()).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: "Fear" })])
    );
  });
  test("should empty cart", function() {
    mike.addMovieToCart("Mad Max");
    mike.addMovieToCart("Disclosure");
    mike.emptyCart();
    expect(mike.cart.length).toBe(0);
  });
  test("should checkout", function() {
    mike.addMovieToCart("Disclosure");
    mike.addMovieToCart("I,Robot");
    mike.addMovieToCart("Spotlight");
    mike.checkout();
    console.log(mike.cart.length);
    expect(mike.viewCart()).toEqual("Cart empty");
    expect(mike.viewRentals()).toEqual(
      expect.arrayContaining([expect.objectContaining({ customer_id: mike.id, status: "open" })])
    );
  });
  test("should check rental history of customer", function() {
    mike.addMovieToCart("I,Robot");
    mike.checkout();
    mike.addMovieToCart("Spotlight");
    expect(mike.checkout()).toEqual("You have an open rental. Return the movies please");
    expect(felix.checkout()).toEqual("Cart is empty");
    expect(felix.viewRentals()).toEqual("No rentals for this customer");
  });
});
