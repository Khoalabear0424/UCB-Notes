CREATE DATABASE classroom_db;

USE classroom_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT, 
    name VARCHAR(255),
    favorite_food VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE pets (
    id INT NOT NULL AUTO_INCREMENT,
    pet_type VARCHAR(255) NOT NULL,
    pet_name VARCHAR(255) NOT NULL,
    student_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    PRIMARY KEY (id)
);

INSERT INTO students (name, favorite_food) VALUES ("Nicholas", "Macaroni and cheese"), ("Khoa", "Ramen");

INSERT INTO students (name, favorite_food) VALUES ("Allan", "butter"), ("Kristen", "Somosas"),("Rob","Italian"),("Janak","Nepalese"),("Haven","Steak"),("Carol","Chicken");

INSERT INTO pets (pet_type, pet_name, student_id) VALUES ("cat", "Duck", 4), ("dog", "Gordo", 3),("turtle","donatella",14);															
/* show all the pets from the pets table */
SELECT * FROM pets;

SELECT * FROM students;

DESCRIBE pets;













                "