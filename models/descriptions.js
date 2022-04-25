export default (database, DataTypes) => {
  const descriptions = database.define(
    'descriptions',
    {
      description_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      parking: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      takeout: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      delivery: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return descriptions;
};
