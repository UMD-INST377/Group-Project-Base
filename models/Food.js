export default (database, DataTypes) => {
  const Food = database.define('Food', {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_of_origin: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Food;
};