SELECT customer.id, max(purchase_order.amount)
--
FROM customer
INNER JOIN purchase_order ON (customer.id = purchase_order.customer_id)
GROUP BY customer.id
--
;
