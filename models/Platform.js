export default (sequelize, DataTypes) => {
  const Platform = sequelize.define(
    'platform',
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