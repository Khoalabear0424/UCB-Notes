DROP DATABASE teacher_db IF EXISTS;

CREATE DATABASE teacher_db;

USE teacher_db;
-- activity:

-- make a table called teachers
-- id, name, subject
CREATE TABLE teachers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

-- make a table called students
-- id, name, teacher_id
CREATE TABLE students(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    teacher_id INT NOT NULL,
    FOREIGN KEY(teacher_id) REFERENCES teachers(id),
    PRIMARY KEY(id)
);

-- insert 3 records into teachers
INSERT INTO teachers (name,subject) VALUES ('Professor Snape','Potions'),
('Professor Dumbledoor','Head Master'),
('Professor ButtHead','Magic SHit');

-- insert 6 records into students
INSERT INTO students (name,teacher_id) VALUES ('Harry Potter',1),
('Hermione Granger',2),
('Ron Weasely',3),
('Bob',1),
('Larry',2),
('Voldemort',3);

-- write a sql statement that shows all of the students names and their teacher’s names and the subjects their teachers teach
SELECT students.name, teachers.name, teachers.subject
FROM students
LEFT JOIN teachers
ON students.teacher_id = teachers.id;


-- delete 1 record from students using a delete sql query (make sure you use where in your query)
DELETE FROM students WHERE name="Harry Potter";

-- update the teacher_id of a student to another teacher_id using an update sql query (make sure you use where in your query)
UPDATE students
SET teacher_id = 3
WHERE name="Hermione Granger";