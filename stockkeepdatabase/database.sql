CREATE TABLE IF NOT EXISTS customers (
  -- <name> <datatype> <constraints>
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(30) CHECK (email LIKE '_%@_%._%')
);


CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);


CREATE TABLE IF NOT EXISTS stores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  location VARCHAR(20) NOT NULL
);


CREATE TABLE IF NOT EXISTS quantities (
  id SERIAL PRIMARY KEY,
  store_id INT REFERENCES stores(id),
  product_id INT REFERENCES products(id),
  quantity INT CHECK (quantity > -1 AND quantity < 9999)
);


CREATE TABLE IF NOT EXISTS sales (
  id SERIAL PRIMARY KEY,
  store_id INT REFERENCES stores(id),
  product_id INT REFERENCES products(id),
  customer_id INT REFERENCES customers(id),
  total_amount INT
);
