export default (sequelize, DataTypes) => {
  const disastertype = sequelize.define(
    'Disaster Type',
    {
      disaster_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      type:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return disastertype;
};