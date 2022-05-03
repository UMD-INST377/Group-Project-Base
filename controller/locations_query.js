export default 
`SELECT 
    meal_name,
    hall_name,
    hall_address
FROM meals
JOIN meals_locations
  ON meals.meal_id = meals_locations.meal_id
JOIN dining_hall
  ON dining_hall.hall_id = meals_locations.hall_id`;