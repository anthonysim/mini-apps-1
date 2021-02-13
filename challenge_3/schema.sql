CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address1 VARCHAR(255) NOT NULL,
  address2 VARCHAR(255),
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zipCode INT NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  creditCardNumber VARCHAR(255) NOT NULL,
  expiredDate VARCHAR(255) NOT NULL,
  CVV INT NOT NULL,
  creditCardZipCode INT NOT NULL,
  PRIMARY KEY(id)
)


-- mysql -u root -p
-- source <path_to_sql_file>/file.sql