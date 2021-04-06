export default (sequelize, DataTypes) => {
  const MuseumStaff = sequelize.define(
    'museum_staff',
    {
      staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      employee_first_name: {
        type: DataTypes.STRING
      },
      employee_last_name: {
        type: DataTypes.STRING
      },
      museum_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MuseumStaff;
};
