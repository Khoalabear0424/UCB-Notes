DROP DATABASE actors_db;

CREATE DATABASE actors_db;

USE actors_db;

CREATE TABLE actors (
    id INT AUTO_INCREMENT,
    actor_name VARCHAR(255),
    PRIMARY KEY(id)
);
