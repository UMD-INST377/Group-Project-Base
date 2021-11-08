const categoryGet = `SELECT category_id, category
FROM eruption_category;`

const categoryPut = `UPDATE eruption_category
SET category = :category 
WHERE category_id = :category_id;`

const categoryPost = `INSERT INTO eruption_category (category_id, category)
VALUES(DEFAULT, :category);`

const categoryDelete = `DELETE FROM eruption_category
WHERE category_id = :category_id;`

export default {
  categoryGet, categoryPut, categoryPost, categoryDelete
};