-- Add a task with the these attributes: 
-- title, description, created, updated, dueDate, statusID, userID
INSERT INTO task (
title, 
description, 
created, 
updated, 
due_date, 
status_id, 
user_id) VALUES (
'learn about mysql',
'learning about insert into queries',
NOW(),
NOW(),
'2020-01-01 12:00:00',
1,
9);

-- Change the title of a task with these attributes: taskID, newTitle
UPDATE task 
SET title = 'learn about nodejs'
WHERE id = 42;

-- Change the task due date with these attributes: taskID, newDueDate
UPDATE task
SET due_date = '2019-12-19 12:30:00'
WHERE id = 42;

-- Change the task status with these attributes: taskID, newStatus
UPDATE task
SET status_id = 2
WHERE id = 42;

-- Mark a task as complete with this attribute: taskID
UPDATE task 
SET status_id = 3
WHERE id = 42;

-- Delete task with this attribute: taskID
DELETE FROM task
WHERE id = 39;
        