CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  token TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);
