export default  {

  // team:the table name is food_inspections in our pg_county_food_inspections database - ms
  /* this statement simply retrieves the entire table, which our front-end will sort based on
         what the user wants to see */
  getController: 'SELECT * FROM pg_county_food_inspections.food_inspections;',

  // this statement creates a new record in the database//
  postController: `INSERT INTO food_inspections,
  VALUES (
  establishment_id,
  name,
  category,
  inspection_date,
  inspection_results,
  city,
  state,
  zip,
  address_line_1,
  address_line_2,
  food_from_approved_source,
  food_protected_from_contamination,
  ill_workers_restricted,
  proper_hand_washing,
  cooling_time_and_temperature,
  cold_holding_temperature,
  hot_holding_temperature,
  cooking_time_and_temperature,
  reheating_time_and_temperature,
  hot_and_cold_running_water_provided,
  proper_sewage_disposal,
  no_bare_hand_contact,
  adequate_hand_washing_facilities,
  rodent_and_insects,
  food_contact_surfaces_and_equipment,
  inspection_type,
  owner,
  type,
  location
  )`,

  //CHANGE WHERE FROM ARABITRARY VALUE
  putController: `UPDATE food_inspections, 
  SET name = 'name'
  SET category = 'category'
  SET city = 'college park'
  SET state = 'maryland' 
  WHERE name = current_id,`,

  deleteController: `DELETE
  FROM food_inspections
  WHERE name = mcdonalds`
};