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
});
