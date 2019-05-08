-- SELECT question_id, name, score
-- FROM scores
-- LEFT JOIN friends
-- ON scores.friend_id = friends.id
-- WHERE friend_id = 3
-- ORDER BY question_id ASC;

SELECT * FROM scores;
SELECT * FROM questions;
SELECT * FROM friends;

SELECT SUM(score)
FROM scores
GROUP BY friend_id;

SELECT existing_name, SUM(score_difference) AS total_difference FROM
(SELECT s1.question_id, f1.name AS existing_name, s1.score AS existing_score, 
n.name AS current_name, n.score AS current_score, ABS(s1.score-n.score) AS score_difference
FROM scores s1
LEFT JOIN friends f1
ON s1.friend_id = f1.id 
LEFT JOIN (SELECT s2.question_id, f2.name, s2.score
FROM scores s2
LEFT JOIN friends f2
ON s2.friend_id = f2.id
WHERE s2.friend_id = 3
ORDER BY s2.question_id ASC) n
ON s1.question_id = n.question_id
WHERE f1.id < 3) results
GROUP BY existing_name
ORDER BY total_difference ASC;

