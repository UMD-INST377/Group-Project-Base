const genreGet = `SELECT genre_id, genre_name
FROM genres`;

const genrePut = `UPDATE genres
SET art = :art
WHERE genre_id = :genre_id;`;

const genrePost = `INSERT INTO genres (genre_id, genre_name)
VALUES(DEFAULT, :art);`

const genreDelete = `DELETE FROM genres
WHERE genre_id = :genre_id;`

export default {
  genreGet, genrePut, genrePost, genreDelete 
};