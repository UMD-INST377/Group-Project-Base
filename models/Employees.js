export default (database, DataTypes) => {
  const Employees = database.define(
    'employees',
    {
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      last_name: {
        type: DataTypes.STRING

      },
      first_name: {
        type: DataTypes.STRING
      },
      phone_number: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      employee_type: {
        type: DataTypes.STRING
      },
      Shelters_shelter_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Employees;
};