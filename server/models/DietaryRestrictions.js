export default (sequelize, DataTypes) => {
  const DietaryRestrictions = sequelize.define(
    'Dietary_Restrictions',
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
  return DietaryRestrictions;
};
