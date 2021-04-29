export default (sequelize, DataTypes) => {
  const neighborhoods = sequelize.define(
    'neighborhoods',
    {
      neighborhood_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      neighborhood_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return neighborhoods;
};
