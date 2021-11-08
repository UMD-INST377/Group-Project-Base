export default controllers = {
  getAllController: 'SELECT * FROM pg_county_food_inspections.food_inspections;',

  seoncdController: `SELECT hall_name,
    hall_address,
    hall_lat,
    hall_long,
    meal_name
    FROM
    Meals m
    INNER JOIN Meals_Locations ml 
    ON m.meal_id = ml.meal_id
    INNER JOIN Dining_Hall d
    ON d.hall_id = ml.hall_id;`
};