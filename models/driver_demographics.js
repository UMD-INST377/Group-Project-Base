export default (sequelize, DataTypes) => {
  const driver_demographics = sequelize.define(
    'driver_demographics',
    {
      person_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      report_id: {
        type: DataTypes.STRING
      },
      sex_code: {
        type: DataTypes.STRING
      },
      date_of_birth: {
        type: DataTypes.STRING
      },
      culpability_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return driver_demographics;
};
