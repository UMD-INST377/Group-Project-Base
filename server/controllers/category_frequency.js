const freqGet = `SELECT count(category) AS frequency_of_category_type, month
FROM eruption_category
JOIN eruption_info USING(category_id)
WHERE category_id = 3
GROUP BY MONTH
ORDER BY MONTH;

`;

export default {freqGet};
