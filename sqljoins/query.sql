WITH purchase_order_totals AS (
  SELECT customer.id, customer.name, SUM(purchase_order.amount) as total
  FROM customer
  INNER JOIN purchase_order ON (customer.id = purchase_order.customer_id)
  GROUP BY customer.id
  ORDER BY customer.name ASC
)
SELECT name, total
FROM purchase_order_totals
WHERE total = (
  SELECT MAX(total)
  FROM purchase_order_totals
)
;




-- SELECT name, total
-- FROM (
--     SELECT customer.id, customer.name, SUM(purchase_order.amount) as total
--     FROM customer
--     INNER JOIN purchase_order ON (customer.id = purchase_order.customer_id)
--     GROUP BY customer.id
--     ORDER BY customer.name ASC
--   )
-- WHERE total = (
--   SELECT MAX(total)
--   FROM (
--     SELECT customer.id, customer.name, SUM(purchase_order.amount) as total
--     FROM customer
--     INNER JOIN purchase_order ON (customer.id = purchase_order.customer_id)
--     GROUP BY customer.id
--     ORDER BY customer.name ASC
--   )
-- )
-- ;

