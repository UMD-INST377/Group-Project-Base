export default (database, DataTypes) => {
  const Area = database.define('Area', {
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: true
    },
    landmarks: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Area;
};
