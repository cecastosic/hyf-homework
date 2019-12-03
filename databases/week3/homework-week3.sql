-- Create all the sql for creating this data model: https://dbdiagram.io/d/5d5bff66ced98361d6ddc18c

CREATE DATABASE meal_sharing_db DEFAULT CHARACTER SET utf8mb4 COLLATE = utf8mb4_unicode_ci;

USE meal_sharing_db;

CREATE TABLE meal (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL UNIQUE,
description TEXT NOT NULL,
location VARCHAR(255) NOT NULL,
when_date DATETIME NOT NULL,
max_reservation INT UNSIGNED NOT NULL,
price DECIMAL(5,2) NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
);


CREATE TABLE reservation (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
number_of_guests INT UNSIGNED NOT NULL,
meal_id INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);

CREATE TABLE review (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
meal_id INT UNSIGNED NOT NULL,
stars INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);

-- Get all meals
SELECT * 
FROM meal;

-- Add a new meal
INSERT INTO meal (
    title,
    description,
    location,
    when_date,
    max_reservation,
    price
) VALUES (
    'Serbian cuisine',
    'We don´t want to just offer a well-prepared meal. We want this day to be an unforgettable night. For this, in addition to the dishes, we offer a soundtrack of Serbian songs, we will show a documentary about Serbian music and culture. On menu will be Sarma, Musaka, Punjene paprike and Sopska salata.',
    'Copenhagen, my home',
    '2020-01-01 17:00:00',
    10,
    80.00
);

-- Get a meal with any id, fx 1
SELECT * 
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title = 'Original serbian cuisine in Denmark'
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 1;


-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT INTO reservation (
    number_of_guests,
    meal_id
) VALUES (
    5,
    1
);

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 6
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;

-- Get all reviews
SELECT *
FROM review;

-- Add a new review
INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'perfect!!!',
    'it was so perfect and delicious',
    1,
    5
);

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'Lovely night', description = 'It was a lovely night. The dinner was plenty and delicious.'
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT meal.id, meal.title, meal.location, meal.when_date, SUM(reservation.number_of_guests), meal.max_reservation
FROM meal 
JOIN reservation ON reservation.meal_id = meal.id
WHERE when_date >= CURRENT_TIMESTAMP
GROUP BY reservation.meal_id
HAVING SUM(reservation.number_of_guests) < meal.max_reservation;

-- Get meals that partially match a title. 
-- Rød grød med will match the meal with the title Rød grød med fløde
SELECT * 
FROM meal
WHERE title LIKE '%cuisine%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE (created_date BETWEEN '2019-11-20 20:00:00' AND '2019-11-30 20:00:00');

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal 
LIMIT 5;

-- Get the meals that have good reviews
SELECT meal.id, meal.title, meal.location, review.stars, review.title, review.description, review.created_date
FROM meal
JOIN review ON review.meal_id = meal.id
WHERE review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT * 
FROM reservation
WHERE meal_id = 1
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, meal.location, review.stars, review.title, review.description, review.created_date
FROM meal
JOIN review ON review.meal_id = meal.id
ORDER BY review.stars DESC;