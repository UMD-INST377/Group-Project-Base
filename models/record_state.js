export default (sequelize, DataTypes) => {
  const statetype = sequelize.define(
    'record_state',
    {
      record_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      state:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return statetype;
}