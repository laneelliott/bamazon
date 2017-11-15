DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
		item_id INT(11) NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(30) NOT NULL,
        department_name VARCHAR(30),
        price DECIMAL(11, 2) NOT NULL,
        stock_quantity INT(11),
        PRIMARY KEY (item_id)
);

INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Dark Roast Coffee Beans', 'Pantry', '12.99', '46');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Blonde Roast Coffee Beans', 'Pantry', '11.99', '39');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Fallout', 'Electronics', '59.99', '95');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Skyrim', 'Electronics', '59.99', '78');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('TV', 'Electronics', '899.99', '3');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Flip Flops', 'Clothing', '14.99', '27');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Mittens', 'Clothing', '7.99', '18');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Nintendo Switch', 'Electronics', '299.99', '20');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Eragon', 'Books', '19.99', '29');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Eldest', 'Books', '19.99', '25');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Brisingr', 'Books', '21.99', '26');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Inheritance', 'Books', '21.95', '20');


SELECT * FROM products;