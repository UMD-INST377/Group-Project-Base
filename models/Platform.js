export default (sequelize, DataTypes) => {
  const Platform = sequelize.define(
    'Platform',
    {
      platform_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      platform_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Platform;
}