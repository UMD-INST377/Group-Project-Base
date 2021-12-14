const establishmentVar = 'SELECT establishment_id, name, category, inspection_date, inspection_results, city, state, zip FROM FOOD_INSPECTION_GROUP8.Food_Inspection WHERE';
const updateVar = 'UPDATE establishment_id SET category = Seafood WHERE zip= 20744 ';
export default {
  establishmentVar,
  updateVar
};