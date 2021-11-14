// Get timeline of the presidents
const timeLine = `SELECT president_id, CONCAT(first_name,' ',last_name) AS "President Name", CAST((SPLIT_STR(date_inaurg, ',', 2)-1) AS SIGNED) AS elected_year
FROM Presidents.presidents_table;`;

export default {
  timeLine,
}
