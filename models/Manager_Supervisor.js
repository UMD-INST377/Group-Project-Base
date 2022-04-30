export default (database, DataTypes) => {
  const Manager_Supervisor = database.define('Manager_Supervisor', {
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
      autoIncrement: true
    }
  });
  return Manager_Supervisor;
};