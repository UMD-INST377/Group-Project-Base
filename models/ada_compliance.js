export default (sequelize, DataTypes) => {
  const adaCompliance = sequelize.define(
    'ada_compliance',
    {
      ada_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      ada_type: {
        type: DataTypes.STRING
      }
    },
    {freezeTableName: true, timestamps: false}
  );
  return visitorInfo;
};