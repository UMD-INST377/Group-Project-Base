/**
 * Get all Big 10 universities from the database using SELECT
 *
 * @type {SQLStmt}
 */
const getAllUniversities = `SELECT university_id, university_name FROM university`;

/**
 * Get Big 10 university by rank_id
 *
 * @type {SQLStmt}
 */
const getUniversity = `SELECT a.university_id, a.university_name, b.univ_location, b.univ_region, b.univ_zip, c.coalition, c.common_app, c.required_test_score
  FROM university a
  INNER JOIN location b
    ON a.university_id = b.university_id
  INNER JOIN requirements c
    ON a.university_id = c.university_id
  WHERE a.university_id = :rank_id
  LIMIT 0,1`;

const getUniversityName = `SELECT university_name FROM university WHERE university_id = :rank_id LIMIT 0,1`;

const getUniversityLoc = 'SELECT univ_location FROM location WHERE university_id = :rank_id LIMIT 0,1';

// Export variables
export default {
  getAllUniversities,
  getUniversity,
  getUniversityName,
  getUniversityLoc
};
