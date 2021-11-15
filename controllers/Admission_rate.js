/** 
get admission rates from big 10 schools based on University id and rank id
* @type {sqlstmt}
*/

const getAdmissionRate = 'SELECT acceptence_rate FROM admissions WHERE university_id = :rank_id, LIMIT 0,1'

export default {
    getAdmissionRate,
};


