export default (database, DataTypes) => {
  const Restaurant_Food = database.define('Restaurant_Food', {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    }
  });
  return Restaurant_Food;
};