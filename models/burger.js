const orm = require("../config/orm.js")

/*   * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.*/
// Import the ORM to create functions that will interact with the database.

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res)
    });
  },

  update: function(id, cb){
    orm.update('burgers', id, cb)
  },

  create: function(name, cb) {
    orm.create("burgers", name, cb)
    console.log('burger create')
  }
};
// Export the database functions for the controller (catsController.js).
module.exports = burger;