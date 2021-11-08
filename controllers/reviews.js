/**
 * Get N reviews from database by University ID
 *
 * @type {SQLStmt}
 */
const getNReviews = `SELECT review, date FROM reviews WHERE university_id = :rank_id LIMIT 0,:review_limit`;

// Export variables
export default {
  getNReviews,
};
