
DROP DATABASE IF EXISTS foodQuestions_db;

CREATE DATABASE foodQuestions_db;

USE foodQuestions_db;
-- people
--     id
--     name - varchar

CREATE TABLE people(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


-- questions
--     id
--     question - varchar

--         1 "from 0 to 10 - how much do you like broccoli?"

--         2 "from 0 to 10 - how much do you like cheese its?"
        
--         3 "from 0 to 10 - how much do you like kale?"
        
--         4 "from 0 to 10 - how much do you like limp bizkit?"
        
--         5 "from 0 to 10 - how much do you like JavaScript?"

-- answers
--     question_id - integer
--     person_id - integer
--     answer - integer 0 - 10

-- friends
--     person_a_id - integer

--     person_b_id - integer

-- 1. make those tables
-- 2. insert 5 records into each table
-- 3. write a query to get all the people and their answers