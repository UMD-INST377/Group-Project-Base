export default (database, DataTypes) => {
  const Restaurant_Owner = database.define('Restaurant_Owner', {
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    }
  });
  return Restaurant_Owner;
};