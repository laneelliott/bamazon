//Require Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection;

//Functions
function productDisplay(jsonData){
	console.log("\nProduct ID | Product Name | Department | Price | Quantity in Stock");
	//Loop through jsonData array of objects
	for (var i = 0; i < jsonData.length; i++){
		console.log(jsonData[i].item_id, jsonData[i].product_name, jsonData[i].department_name, jsonData[i].price, jsonData[i].stock_quantity);
	}
	//Run productSelect function
	productSelect(jsonData);
}

function productSelect(jsonData){
	inquirer.prompt([

		{
			type: 'input',
			name: 'chosen_item',
			message: 'Which item would you like to purchase? (Type ID and hit Enter)'
		},
		{
			type: 'input',
			name: 'chosen_quantity',
			message: 'How many would you like to purchase?'
		}
	]).then(function(answers){
		console.log(answers)
		productPurchase(answers.chosen_item, answers.chosen_quantity, jsonData);
	});
}

function productPurchase(item, quantity, jsonData){
	console.log(item, quantity);
	if(checkQuantity(item, quantity, jsonData) === false){
		console.log('\nSorry we don\'t seem to have that much in stock. Please search again.');
	} else {
		connection.query("UPDATE `bamazon`.`products` SET `stock_quantity`='"+checkQuantity(item, quantity, jsonData)+"' WHERE `item_id`='"+item+"';", function(err,res){
			//run productDisplay function
			console.log('\nYour Purchase has been made');
		});
	}
	connection.end();
	callDB();
}

function checkQuantity(item, reqQuantity, jsonData){
	var currQuantity = jsonData[parseInt(item)-1].stock_quantity;
	if (parseInt(currQuantity) >= parseInt(reqQuantity)){
		return parseInt(currQuantity) - parseInt(reqQuantity);
	} else {
		return false;
	};
}


function callDB(){
	//Create mysql connection
	connection = mysql.createConnection({
		host: 'localhost',
		port: '3306',
		user: 'root',
		database: 'bamazon'
	});
	//Connect to database
	connection.connect(function(err){
		if (err) {throw err;}
		connection.query('SELECT * FROM products', function(err,res){
			//run productDisplay function
			productDisplay(res)
		});
	});
};

callDB();

