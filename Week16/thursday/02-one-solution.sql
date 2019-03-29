/* activity:

Make a friends_db database. Connect to it, and then create a friends table with 7 friends from the friends tv show (columns: id, full name, profession), make a pets table and insert pet_name and friend_id (also id), insert all pets that friends have from the show. */

CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friends (
    id INT AUTO_INCREMENT, 
    name VARCHAR(255),
    profession VARCHAR(255),
    PRIMARY KEY(id)
);
	
CREATE TABLE pets (
    id INT NOT NULL AUTO_INCREMENT,
    pet_name VARCHAR(255) NOT NULL,
    friend_id INT NOT NULL,
    FOREIGN KEY (friend_id) REFERENCES friends(id),
    PRIMARY KEY (id)
);

/* 
	WRONG
	
		INSERT INTO friends (id, name, profession) VALUES (1, 'pheobe buffay', 'massage therapist');

	CORRECT
	
		INSERT INTO friends (name, profession) VALUES ('pheobe buffay', 'massage therapist');
*/


INSERT INTO friends (name, profession) VALUES ('Rachel Green', 'Buyer');
INSERT INTO friends (name, profession) VALUES ('Monica Geller', 'Chef');
INSERT INTO friends (name, profession) VALUES ('Dr. Ross Geller', 'Paleontologist');
INSERT INTO friends (name, profession) VALUES ('Chandler Bing', 'Advertising');
INSERT INTO friends (name, profession) VALUES ('Pheobe Buffay', 'Massage Therapist');
INSERT INTO friends (name, profession) VALUES ('Joey Tribbiani', 'Soap Opera Star');
INSERT INTO friends (name, profession) VALUES ('Gunther', 'Coffee House Manager');

/* you will always have to know which friend_id to use when inserting into the pets table */
INSERT INTO pets (pet_name, friend_id) VALUES ('Marcel', 3);
INSERT INTO pets (pet_name, friend_id) VALUES ('Chicken', 4);
INSERT INTO pets (pet_name, friend_id) VALUES ('Duck', 4);
INSERT INTO pets (pet_name, friend_id) VALUES ('Mrs. Whiskerson', 1);

/*
when you sign into MySQL
	you don't have to be in the folder

	but it helps to be in the folder if you want to use the source command on specific files
		
		because otherwise, you'd have to give the full file path of the file you're sourcing

SHOW DATABASES;

USE friends_db;

SHOW TABLES

SELECT * FROM friends;
SELECT * FROM pets;

* represents every column in the table

SQL = Structured Query Language

to run this file you do 
	
	source fileName.sql
*/




