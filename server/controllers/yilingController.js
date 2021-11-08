export default `SELECT Animal_ID,
lifestyle_id,
    pack,
    domestication,
    diet
FROM
    animals a
JOIN lifestyle l
    ON a.lifestyle_lifestyle_id = l.lifestyle_id;`