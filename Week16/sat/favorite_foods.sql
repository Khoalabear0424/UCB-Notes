DROP DATABASE IF EXISTS favorite_foods_db;

CREATE DATABASE favorite_foods_db;

USE favorite_foods_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE foods (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    calories INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE favorites (
    id INT NOT NULL AUTO_INCREMENT,
    food_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (food_id) REFERENCES foods(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

INSERT INTO users (name) VALUES ('Aaron'), ('Haven'), ('Maricel');
INSERT INTO foods (name, category, calories) VALUES ('broccoli', 'vegetables', 50), 
('Yogurt', 'probiotics', 150), 
('lima beans', 'legumes', 150), 
('pistachios', 'nuts', 200), 
('kale', 'vegetables', 150), 
('popcorn', 'snack', 150), 
('hummus', 'snack', 200), 
('chickpeas', 'snack', 200), 
('avocados', 'vegetables', 300);

INSERT INTO favorites (food_id, user_id) VALUES (9, 1), (1, 2), (4, 3);

/*

make a table called users (id, name)

make a table called foods (id, name, category, calories)

make a table called favorites (id, food_id, user_id)

insert 3 users
insert 10 foods
insert 3 favorites

write a query to get all the users
	SELECT * FROM users;

write a query to get the you the food with max calories
	SELECT * 
	FROM foods
	ORDER BY calories DESC;
	
	SELECT MAX(calories)
	FROM foods;

write a query to get you the average number of calories per category in the foods table
	SELECT AVG(calories), category
	FROM foods
	GROUP BY category;

write a query that will get you all the favorites
	SELECT *
	FROM favorites;

write a query to get you all the favorites and the names of the corresponding users
	SELECT *
	FROM favorites f
	LEFT JOIN users u
	ON f.user_id = u.id;

	SELECT u.id AS user_id, u.name AS username, f.id AS food_id
	FROM favorites f
	LEFT JOIN users u
	ON f.user_id = u.id;

write a query to get you all the favorites and the names of the corresponding users and the names of the corresponding foods

	SELECT u.id AS user_id, u.name AS username, f.id AS food_id, fo.name as food_name
	FROM favorites f
	LEFT JOIN users u
	ON f.user_id = u.id
	LEFT JOIN foods fo
	ON f.food_id = fo.id;










*/