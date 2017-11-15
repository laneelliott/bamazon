//Require Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

//Create mysql connection
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	database: 'bamazon'
});

//Functions
function productDisplay(jsonData){
	console.log("\nProduct ID | Product Name | Department | Price | Quantity in Stock");
	//Loop through jsonData array of objects
	for (var i = 0; i < jsonData.length; i++){
		console.log(jsonData[i].item_id, jsonData[i].product_name, jsonData[i].department_name, jsonData[i].price, jsonData[i].stock_quantity);
	}

}

function callDB(){
	//Connect to database
	connection.connect(function(err){
		if (err) {throw err;}
		connection.query('SELECT * FROM products', function(err,res){
			//run productDisplay function
			productDisplay(res)
		});
		connection.end();
	});
};

callDB();