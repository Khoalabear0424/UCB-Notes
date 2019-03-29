-- 1.    select all of the people

SELECT * 
FROM people;

-- 5.    count the number of people

SELECT COUNT(id)
FROM people;

SELECT COUNT(*)
FROM people;

-- 6.    find the max answer for question 1
SELECT MAX(answer)
FROM answers
WHERE question_id = 1;

-- 7.    find the min answer for question 1
SELECT MIN(answer)
FROM answers
WHERE question_id = 1;

-- 8.    find the average answer for question 2
SELECT AVG(answer)
FROM answers
WHERE question_id = 2;

-- 9.    find a count of the number times people answered a question 

-- step 1
-- SELECT *
-- FROM answers;

-- step 2
-- SELECT * FROM answers LIMIT 1;

-- step 3
-- SELECT question_id
-- FROM answers
-- GROUP BY question_id;

-- step 4
-- SELECT question_id
-- FROM answers
-- GROUP BY question_id;



-- step 5
SELECT question_id, COUNT(id)
FROM answers
GROUP BY question_id;

-- 10.    find the difference between each person's answer and the average answer 

--step 1
-- SELECT AVG(answer)
-- FROM answers;
--7.4138

-- step 2
SELECT *, (answer-7.4138) AS difference_from_avg
FROM answers

-- step 3
-- ERROR 1054 (42S22): Unknown column 'average_answer' in 'field list'
SELECT *, (
	SELECT AVG(answer) 
	FROM answers
) AS average_answer, 
(answer-(
	SELECT AVG(answer) 
	FROM answers
)) AS difference_from_avg
FROM answers;










