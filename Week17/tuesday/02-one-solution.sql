DROP DATABASE IF EXISTS friends_db;

CREATE DATABASE friends_db;

USE friends_db;

-- people
-- 	id
-- 	name - varchar

CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


-- questions
-- 	id
-- 	question - varchar
CREATE TABLE questions (
    id INT NOT NULL AUTO_INCREMENT, 
    question VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


-- answers
-- 	question_id - integer
-- 	person_id - integer
-- 	answer - integer 0 - 10
CREATE TABLE answers (
    id INT NOT NULL AUTO_INCREMENT,
    question_id INT NOT NULL,
    person_id INT NOT NULL,
    answer INT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (person_id) REFERENCES people(id),
    PRIMARY KEY (id),
    CHECK (answer >= 0),
    CHECK (answer <= 10)
);

-- friends
-- 	person_a_id - integer
-- 	person_b_id - integer
CREATE TABLE friends (
    person_a_id INT NOT NULL,
    person_b_id INT NOT NULL,
    FOREIGN KEY (person_a_id) REFERENCES people(id),
    FOREIGN KEY (person_b_id) REFERENCES people(id),
);

INSERT INTO people (name) VALUES 
('Aaron'), 
('Haven'), 
('Maricel'), 
('Rob'), 
('Ebony'), 
('Juthika'), 
('Josh');

INSERT INTO questions (question) VALUES 
('On a scale of 1 to 10 how good is the office?'), 
('On a scale of 1 to 10 how good is depeche mode?'), 
('On a scale of 1 to 10 how good is lasagna?'), 
('On a scale of 1 to 10 how good is golden grahms?');

INSERT INTO answers (question_id, person_id, answer) VALUES 
(4, 1, 5),
(4, 2, 8),
(4, 3, 10),
(4, 4, 10),
(4, 5, 8),
(4, 6, 8),
(4, 7, 2);


INSERT INTO answers (question_id, person_id, answer) VALUES 
(3, 1, 5),
(3, 2, 8),
(3, 3, 10),
(3, 4, 10),
(3, 5, 8),
(3, 6, 8),
(3, 7, 2);

INSERT INTO answers (question_id, person_id, answer) VALUES 
(2, 1, 5),
(2, 2, 8),
(2, 3, 10),
(2, 4, 10),
(2, 5, 8),
(2, 6, 8),
(2, 7, 2);

INSERT INTO answers (question_id, person_id, answer) VALUES 
(1, 1, 10),
(1, 2, 8),
(1, 3, 10),
(1, 4, 10),
(1, 5, 8),
(1, 6, 8),
(1, 7, 2);


SELECT * 
FROM answers
LEFT JOIN people
ON people.id = answers.person_id;


SELECT * 
FROM answers
LEFT JOIN people
ON people.id = answers.person_id
LEFT JOIN questions
ON questions.id = answers.question_id;






