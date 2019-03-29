DROP DATABASE food_db IF EXISTS;

CREATE DATABASE food_db;

USE food_db;

-- make a table called users (id, name)
CREATE TABLE users (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

-- make a table called foods (id, name, category, calories)
CREATE TABLE foods(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    calories INT NOT NULL,
    PRIMARY KEY(id)
);

-- make a table called favorites (id, food_id, user_id)
CREATE TABLE favorites(
    id INT NOT NULL AUTO_INCREMENT,
    food_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY(food_id) REFERENCES foods(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    PRIMARY KEY(id)
);

-- insert 3 users
INSERT INTO users (name) VALUES ('Khoa'),('Kelly'),('Ellie');

-- insert 10 foods
INSERT INTO foods (name,category,calories) VALUES
('donuts','junk food',200),
('carrots','veggies',80),
('tomatoes','veggies',110),
('beer','alcohol',350),
('pizza','junk food',600),
('cheese sticks','junk food',600),
('bananas','fruits',340),
('apples','fruits',200),
('vodka','alcohol',500),
('lettuce','veggies',200);

-- insert 3 favorites
INSERT INTO favorites (food_id,user_id) VALUES (1,1),(2,3),(4,3);

-- write a query to get all the users
SELECT * FROM users;

-- write a query to get the you the food with max calories
SELECT MAX(calories), name
FROM foods
GROUP BY name;

-- write a query to get you the average number of calories per category in the foods table
SELECT AVG(calories),category
FROM foods
GROUP BY category;

-- write a query that will get you all the favorites
SELECT * FROM favorites;

-- write a query to get you all the favorites and the names of the corresponding users
SELECT favorites.food_id, users.name
FROM favorites
LEFT JOIN users
ON favorites.user_id=users.id;


-- write a query to get you all the favorites and the names of the corresponding users and the names of the corresponding foods
SELECT favorites.food_id, foods.name, users.name
FROM favorites
INNER JOIN users 
ON favorites.user_id=users.id
INNER JOIN foods
ON favorites.food_id=foods.id;
