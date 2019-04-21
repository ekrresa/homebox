var Admin = require("../Store/admin");

describe("Admin Object Tests", function() {
  var oscar = new Admin("oscar", "oscar@gmail.com", "passed");

  test("should be an admin object", function() {
    expect(oscar instanceof Admin).toBe(true);
  });
  test("should add a movie", function() {
    oscar.addMovie("Jack Reacher", "Action", 14, 2012);
    expect(oscar.readAllMovies()).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: "Jack Reacher" })])
    );
  });
  test("should read movies from database", function() {
    expect(oscar.getMoviefromDB("Jack Reacher")).toMatchObject({ title: "Jack Reacher" });
    expect(oscar.readAllMovies()).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: "The Accountant" })])
    );
    expect(oscar.getMoviefromDB("Aquaman")).toBe("Movie not found");
  });
  test("should edit movies", function() {
    var obj = { quantity: 14, year: 2011 };
    console.log(oscar.getMoviefromDB("Jack Reacher"));
    expect(oscar.editMultipleProps("Jack Reacher", obj)).toMatchObject({
      quantity: 14,
      year: 2011
    });
  });
});
