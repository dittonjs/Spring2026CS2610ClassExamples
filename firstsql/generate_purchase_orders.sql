
-- Create purchase_order table
CREATE TABLE IF NOT EXISTS purchase_order (
    id SERIAL PRIMARY KEY,
    amount NUMERIC(10, 2) NOT NULL,
    product VARCHAR(100) NOT NULL
);

-- Generate 1 million purchase orders with random values
DO $$
DECLARE
    i INTEGER := 0;
    products TEXT[] := ARRAY['Laptop', 'Monitor', 'Keyboard', 'Mouse', 'Headphones',
                             'Webcam', 'Desk', 'Chair', 'Phone', 'Tablet',
                             'Printer', 'Scanner', 'Router', 'USB Drive', 'Hard Drive',
                             'SSD', 'RAM', 'Graphics Card', 'Motherboard', 'CPU'];
    random_amount NUMERIC(10, 2);
    random_product TEXT;
BEGIN
    FOR i IN 1..1000000 LOOP
        -- Generate random amount between 10.00 and 9999.99
        random_amount := (RANDOM() * 9990 + 10)::NUMERIC(10, 2);

        -- Select random product from array
        random_product := products[1 + FLOOR(RANDOM() * ARRAY_LENGTH(products, 1))::INTEGER];

        -- Insert the record
        INSERT INTO purchase_order (amount, product)
        VALUES (random_amount, random_product);

        -- Optional: Print progress every 100,000 records
        IF i % 100000 = 0 THEN
            RAISE NOTICE 'Inserted % records', i;
        END IF;
    END LOOP;

    RAISE NOTICE 'Successfully inserted 1,000,000 purchase orders';
END $$;

