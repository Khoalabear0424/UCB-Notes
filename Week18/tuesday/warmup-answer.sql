SELECT * FROM
(SELECT employee_id, 
LAG(employee_id,1) OVER() prev_employee_id,
order_id, action, order_date, o.amount,
LAG(o.amount,1) OVER () prev_order_amount,
LAG(o.amount,1) OVER () -o.amount difference
FROM shipments
LEFT JOIN orders o
ON o.id = shipments.order_id
WHERE action = "ordered") t1
WHERE t1.employee_id = t1.prev_employee_id;

