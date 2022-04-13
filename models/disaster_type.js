export default (sequelize, DataTypes) => {
  const disastertype = sequelize.define(
    'disaster_type',
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