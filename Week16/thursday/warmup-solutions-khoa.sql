-- SELECT question_id, COUNT(id)
-- FROM answers
-- GROUP BY question_id;

-- SELECT AVG(answer)
-- FROM answers;

-- SELECT *, (answer-7.4138) AS difference_from_avg
-- FROM answers

-- SELECT *, (
-- 	SELECT AVG(answer) 
-- 	FROM answers
-- ) AS average_answer, 
-- (answer-(
-- 	SELECT AVG(answer) 
-- 	FROM answers
-- )) AS difference_from_avg
-- FROM answers;

-- SELECT *
-- FROM answers;

-- SELECT *
-- FROM questions;


SELECT question, answer, name
FROM questions
LEFT JOIN answers
ON questions.id = answers.question_id
LEFT JOIN people
ON people.id = answers.person_id
ORDER BY question, answer DESC;

SELECT AVG(answer), name
FROM answers
LEFT JOIN people
ON answers.person_id = people.id
GROUP BY people.id
ORDER BY AVG(answer) DESC;

SELECT question, AVG(answer)
FROM questions
LEFT JOIN answers
ON answers.question_id = questions.id
GROUP BY question
ORDER BY AVG(answer) DESC;




