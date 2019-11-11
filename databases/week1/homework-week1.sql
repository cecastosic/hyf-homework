-- Find out how many tasks are in the task table
SELECT COUNT(id) AS count_task
FROM task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) AS count_task_valid
FROM task
WHERE due_date IS null;


-- Find all the tasks that are marked as done
SELECT * FROM task
WHERE status_id=3;


-- Find all the tasks that are not marked as done
SELECT * FROM task
WHERE status_id!=3;


-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task
ORDER BY created DESC;


-- Get the single most recently created task
SELECT * FROM task
ORDER BY created DESC
LIMIT 1;


-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';


-- Get the title and status (as text) of all tasks
SELECT title AS title_task, status.name AS status 
FROM task
JOIN status ON status.id = task.status_id;


-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS status, COUNT(task.title)
FROM task
JOIN status ON status.id = task.status_id
GROUP BY status_id; 


-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS status, COUNT(task.title) as count_tasks
FROM task
JOIN status ON status.id = task.status_id
GROUP BY status_id
ORDER BY count_tasks DESC; 
