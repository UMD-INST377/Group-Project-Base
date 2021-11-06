/**
 * Get all Big 10 universities from the database using SELECT
 *
 * @type {SQLStmt}
 */
const getAllUniversities = `SELECT university_id, university_name FROM university`;

// Export variables
export default {
  getAllUniversities,
};
