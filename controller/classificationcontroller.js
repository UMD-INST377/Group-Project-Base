const classificationGet = `SELLECT family_id, family_latin_name, family_common_name
FROM classification`;

const classificationPut = `UPDATE classification
SET plants = :plants
WHERE family_id = :family_id;`;

const classificationPost = `INSERT INTO classification (family_id, family_latin_name, family_common_name)
VALUES(DEFAULT, :plants);`

const classificationDelete = `DELETE FROM classification
WHERE family_id = :family_id;`

export default {
    classificationGet, classificationPut, classificationPost, classificationDelete
};