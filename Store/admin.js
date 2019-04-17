var adminsDB = require("../database").admins;

function Admin(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = adminsDB.length > 0 ? adminsDB[adminsDB.length - 1].id + 1 : 1;
}
