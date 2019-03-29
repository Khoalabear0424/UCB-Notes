/*
	activity:

	Make a tvshows_db database. Connect to it, and then create a tvshows table with 2 columns (columns: id, tvshow_name), make a ratings table (columns: id, name_of_person, rating and tvshow_id), insert 6 tv shows into the table and insert 2 ratings for each tv show into the ratings table

		ask students in slack for their ratings
*/

CREATE DATABASE tvshows_db;

USE tvshows_db;

CREATE TABLE tvshows (
    id INT AUTO_INCREMENT, 
    tvshow_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);
	
CREATE TABLE ratings (
    id INT NOT NULL AUTO_INCREMENT,
    name_of_person VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    tvshow_id INT NOT NULL,
    FOREIGN KEY (tvshow_id) REFERENCES tvshows(id),
    PRIMARY KEY (id),
    CHECK (rating>=0),
    CHECK (rating<=10)
);

INSERT INTO tvshows (tvshow_name) VALUES ('Nathan For You'), ('Friends'), ('This Is Us'), ('Rick and Morty'), ('Shark Tank'), ('Rugrats'), ('Doug'), ('Hey Arnold'), ('Spongebob'), ('Ah! Real Monsters'), ('Salute Your Shorts');

INSERT INTO ratings (name_of_person, rating, tvshow_id) VALUES ('Aaron', 7, 1), ('Haven', 8, 2), ('Maricel', 10, 3), ('Pavan', 10, 4), ('Ebony', 10, 5), ('Rob', 7, 6), ('Joe', 9, 7);


INSERT INTO ratings (name_of_person, rating, tvshow_id) VALUES ('Haven', 9, 1);







