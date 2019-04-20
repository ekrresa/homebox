var Person = require("../Person/person");

describe("Person Tests", function() {
  var mike = new Person("mike", "mike@email.com");

  test("should be an instance of Person", function() {
    expect(mike instanceof Person).toBe(true);
  });
  test("should access all movies", function() {
    expect(mike.getAllMovies()).toEqual(
      expect.arrayContaining([expect.objectContaining({ genre: "Drama" })])
    );
  });
});
