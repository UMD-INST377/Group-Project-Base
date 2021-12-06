const frequencyGet = `SELECT COUNT(volcano_name) AS frequency, year
FROM eruption_info
JOIN volcanos USING(volcano_id)
GROUP BY year;`;

export default {frequencyGet};
