export default (sequelize, DataTypes) => {
  const country = sequelize.define(
    'province',
    {
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      country_name: {
        type: DataTypes.STRING
      },
      country_nationality: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return country;
};
