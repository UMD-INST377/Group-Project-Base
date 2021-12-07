const restaurantMapCustom = {
  getRestaurant: 'SELECT Name, Inspection_results, City, Zip, Address_line_1, Type FROM Food_Inspection;',

  putRestaurant: 'UPDATE Food_Inspection SET Establishment_id = $GET["Establishment_id"], Name = $GET["Name"], City = $GET["City"], Zip = $GET["Zip"]',

  postRestaurant: 'INSERT INTO Food_Inspection (Name, City, Zip) VALUES ($GET["Name"], $GET["City"]), $GET["Zip"]',

  deleteRestaurant: 'DELETE restaurantMapCustom FROM Food_Inspection WHERE Establishment_id = $GET["Establishment_id"];'
};

export default restaurantMapCustom;