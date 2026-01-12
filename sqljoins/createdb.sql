-- Create tables
CREATE TABLE customer (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE purchase_order (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE setting (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    recieve_emails BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

-- Insert sample customers
INSERT INTO customer (id, name) VALUES
(1, 'Alice Johnson'),
(2, 'Bob Smith'),
(3, 'Carol Williams'),
(4, 'David Brown'),
(5, 'Eve Davis');

-- Insert sample orders
INSERT INTO purchase_order (id, customer_id, amount) VALUES
(1, 1, 99.99),
(2, 1, 149.50),
(3, 2, 299.99),
(4, 2, 49.99),
(5, 2, 199.00),
(6, 3, 75.25),
(7, 4, 500.00),
(8, 4, 250.00),
(9, 4, 125.50),
(10, 4, 89.99);

-- Insert settings for each customer
INSERT INTO setting (id, customer_id, recieve_emails) VALUES
(1, 1, TRUE),
(2, 2, FALSE),
(3, 3, TRUE),
(4, 4, TRUE),
(5, 5, FALSE);
