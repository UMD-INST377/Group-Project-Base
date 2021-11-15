/**
 * Get N reviews from database by University ID
 *
 * @type {SQLStmt}
 */
const getNReviews = `SELECT review, rating, date FROM reviews WHERE university_id = :rank_id LIMIT 0,:review_limit`;

const postNewReview = `INSERT INTO reviews (university_id, review, rating, graduation_year) VALUES (:rank_id, :review, :rating, :graduation_year)`;

// Export variables
export default {
  getNReviews,
  postNewReview
};
