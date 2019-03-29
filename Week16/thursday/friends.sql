CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friends (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    profession VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE pets (
    id INT AUTO_INCREMENT,
    pet_name VARCHAR(255) NOT NULL,
    friend_id INT NOT NULL,
    FOREIGN KEY (friend_id) REFERENCES friends(id),
    PRIMARY(id);
);

INSERT INTO friends (name, profession) VALUES ('Phoeboe Buffary','Massage Therapist'),
('Rachael Green','Stylist'),
('Ross Goeller','Dino'),
('Monica Goeller','Chef'),
('Chandler Bing','Data Analyst'),
('Joey Tribiani','Actor');

INSERT INTO pets (pet_name,friend_id) VALUES ('Maurice',3),
('Duck',6),
('Chick',5);