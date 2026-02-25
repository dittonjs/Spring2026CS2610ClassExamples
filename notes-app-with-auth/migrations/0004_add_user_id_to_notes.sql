ALTER TABLE notes
ADD COLUMN user_id INT REFERENCES users(id)
;
