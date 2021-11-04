/*Put means gets a record and updates the change*/

/*Update a rating of a song, updated with rating_id of 1*/
export default `UPDATE rating
SET ratings = '5', description = "This rating is 5 out of 5 stars"
WHERE rating_id = 1`;
