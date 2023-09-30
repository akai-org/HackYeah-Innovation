-- Insert data into the "people" table

CREATE TABLE IF NOT EXISTS people (
  person_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL
);


INSERT INTO people (name, age) VALUES
('John Doe', 30),
('Jane Smith', 25),
('Bob Johnson', 35);
