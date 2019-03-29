/*
1. write a query that shows the question, answer, name of person ONLY. Also sort the answers to highest to lowest
*/

SELECT people.name, questions.question, answers.answer 
FROM answers 
LEFT JOIN people  
ON answers.person_id = people.id 
LEFT JOIN questions 
ON questions.id = answers.question_id
ORDER BY answers.answer DESC;

/*
2. find friends that have a similar score to you from the questions you answered

	HINT:

	    find the difference of answers from you and other people in the table
	        and then sort based on the lowest difference 
	            you can also sum the differences
	                and then sort based on the lowest difference sum
*/

	/* this gets all the people and their answers */
	SELECT *
	FROM people p
	LEFT JOIN answers a
	ON p.id = a.person_id;


	/* I need to join my answers to everyone else's answers based on the question id */
	SELECT a.question_id, a.person_id, a.answer AS their_answer
	FROM people p
	LEFT JOIN answers a
	ON p.id = a.person_id;

	SELECT *
	FROM answers my_answers
	LEFT JOIN 
	(SELECT a.question_id, a.person_id, a.answer AS their_answer
	FROM people p
	LEFT JOIN answers a
	ON p.id = a.person_id) their_answers
	ON my_answers.question_id = their_answers.question_id;

	SELECT *
	FROM answers my_answers
	LEFT JOIN 
	(SELECT a.question_id, a.person_id, a.answer AS their_answer
	FROM people p
	LEFT JOIN answers a
	ON p.id = a.person_id
	) their_answers
	ON my_answers.question_id = their_answers.question_id
	WHERE my_answers.person_id != their_answers.person_id;

	/* ABS(-4) => 4 */


	SELECT *, ABS(my_answers.answer-their_answers.their_answer) ans_diff
	FROM answers my_answers
	LEFT JOIN 
	(SELECT a.question_id, a.person_id, a.answer AS their_answer
	FROM people p
	LEFT JOIN answers a
	ON p.id = a.person_id) their_answers
	ON my_answers.question_id = their_answers.question_id
	WHERE my_answers.person_id != their_answers.person_id
	ORDER BY ans_diff ASC;





