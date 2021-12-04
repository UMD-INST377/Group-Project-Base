const postVar = 'SELECT establishment_id, name, category, inspection_date, inspection_results, city, state, zip FROM FOOD_INSPECTION_GROUP8.Food_Inspection';
const createPost = 'CREATE establishment_id, name FROM FOOD_INSPECTION_GROUP8.Food_Inspection WHERE zip = 20744';
export default {
  postVar,
  createPost
};
