/* this will get us every column from the tvshows table */
SELECT * 
FROM tvshows;

/* this will get us every column from the ratings table */
SELECT *
FROM ratings

/* this will get us the values for the name_of_person column and the rating column from the ratings table */
SELECT name_of_person, rating
FROM ratings;


/* this will get us the values for the name_of_person column and the rating column from the ratings table 

AND will order the rows by the rating column in ascending value (meaning the lowest will be first)
*/

	/* one way of writing this */
		SELECT name_of_person, rating
		FROM ratings
		ORDER BY rating;

	/* another way of writing this */
		SELECT name_of_person, rating
		FROM ratings
		ORDER BY rating ASC;

/* this will get us the values for the name_of_person column and the rating column from the ratings table 

AND will order the rows by the rating column in descending order (meaning the highest will be first)
*/

	SELECT name_of_person, rating
	FROM ratings
	ORDER BY rating DESC;

/* get all the ratings that are 9 or above */
	SELECT *
	FROM ratings
	WHERE rating >= 9;

/* get all the ratings that are 9 or above */
	SELECT *
	FROM ratings
	WHERE rating >= 9;


/* get all the ratings that are 9 or above */
	SELECT *
	FROM ratings
	WHERE rating >= 7 AND (name_of_person = 'Haven' OR name_of_person = 'Aaron');


/* AGGREGATE QUERIES */
	
	/* count the number of rows in the tvshows table */
	SELECT COUNT(*)
    FROM tvshows;

    /* lowest value in the rating column of the ratings table */
    SELECT MIN(rating) FROM ratings;

    /* highest value in the rating column of the ratings table */
    SELECT MAX(rating) FROM ratings;

    SELECT AVG(rating) FROM ratings;

    SELECT SUM(rating) FROM ratings;

/* group by with an aggregate */

	SELECT AVG(rating), tvshow_id
	FROM ratings
	GROUP BY tvshow_id;

	SELECT MAX(rating), tvshow_id
	FROM ratings
	GROUP BY tvshow_id;

/* THIS IS WRONG - You cannot use WHERE on an aggregate */
	SELECT MAX(rating), tvshow_id
	FROM ratings
	GROUP BY tvshow_id
	WHERE MAX(rating) = 10;

		/* THIS IS CORRECT */

			SELECT MAX(rating), tvshow_id
			FROM ratings
			GROUP BY tvshow_id
			HAVING MAX(rating) = 10;







