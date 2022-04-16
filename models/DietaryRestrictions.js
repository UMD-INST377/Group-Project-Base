export default (sequelize, DataTypes) => {
  const dietary_restrictions = sequelize.define(
    'dietary_restrictions',
    {
      restriction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      restriction_type: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return dietary_restrictions;
};
