/* eslint-disable indent */
/**
 * Get N reviews from database by University ID
 *
 * @type {SQLStmt}
 */

const getSchoolInfo = 'SELECT testscore_id, university_name, SAT_average, univ_location, required_test_score, admission_rate, tuition_outstate FROM test_scores as t JOIN university as u ON t.testscore_id = u.university_id JOIN location as l ON t.testscore_id = l.university_id JOIN requirements as r ON u.university_id = r.university_id JOIN admissions as a ON u.university_id = a.university_id';

// Export variables
export default {
    getSchoolInfo
    
};
