-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE DATABASE `hyf_school_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `hyf_school_db`;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date_begins` datetime NOT NULL DEFAULT NOW(),
  `date_end` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `class_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `class_id` FOREIGN KEY (`id`) REFERENCES `class` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Create an index on the name column of the student table
ALTER TABLE student ADD INDEX (name);

-- Add a new column to the class table named status which can only have the following values: 
-- not-started, ongoing, finished (hint: enumerations)
ALTER TABLE class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');

