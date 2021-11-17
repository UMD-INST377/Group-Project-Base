// Get timeline of the presidents
const timeLine = `SELECT president_id, president_name, birth_date, home_state, date_inauguration, party, death_date, vice_president, first_lady, elected_year
from
(SELECT presidents_table.president_id, CONCAT(presidents_table.first_name, " ",presidents_table.last_name) as president_name, presidents_table.birth_date,
presidents_table.home_state, presidents_table.date_inaurg as date_inauguration, party, presidents_table.death_date,
CONCAT(vice_presidents.first_name, ' ', vice_presidents.last_name) AS vice_president,
concat(first_ladies.first_ladies_name) as first_lady
FROM presidents_table LEFT JOIN first_ladies
USING(president_id)
JOIN vice_presidents USING(president_id)) as x
join (SELECT
presidents_table.president_id, CAST((SPLIT_STR(date_inaurg, ',', 2)-1) AS SIGNED) AS elected_year
FROM presidents_table) as y
USING(president_id)
ORDER BY president_id;`;

export default {
  timeLine,
}
