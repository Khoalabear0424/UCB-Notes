

--make a database called cats_db
CREATE DATABASE cats_db;

USE cats_db;

--make a table called cats
CREATE TABLE cats (
    id INT AUTO_INCREMENT,
    place_name VARCHAR(255),
    PRIMARY KEY(id)
);
--    the table should have an id and a place_name column

INSERT INTO cats (place_name) VALUES ('kitty'),('kittycat'),('meow'),('purr');

-- insert 4 records into the cats table
