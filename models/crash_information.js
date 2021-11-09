export default (sequelize, DataTypes) => {
  const crash_information = sequelize.define(
    'crash_information',
    {
      report_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        primaryKey: true
      },
      location_id: {
        type: DataTypes.INTEGER
      },
      report_type: {
        type: DataTypes.STRING
      },
      acc_date: {
        type: DataTypes.STRING
      },
      collision_type_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return crash_information;
};