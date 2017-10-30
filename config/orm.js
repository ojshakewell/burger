const connection = require("./connection.js");

var orm = {
	all: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw(err);
			cb(result);
		});
	},

	update: function(table, condition, cb){
		var queryString = "UPDATE " + table + " SET devoured = true WHERE id=" + condition + ";";
    	console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw(err);
			cb(result)
		});
	},

	create: function(table, val, cb){
		var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES ('" + val + "', FALSE);"
		//INSERT INTO burgers_db.burgers (burger_name, devoured) VALUES ('burgerito', FALSE);  
	    console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw(err);
			cb(result);
		});
	}
}

module.exports = orm;

	
// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// };


// 	}*/