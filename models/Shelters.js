export default (database, DataTypes) => {
  const Shelters = database.define(
    'shelters',
    {
      shelter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      shelter_name: {
        type: DataTypes.STRING
      },
      shelter_address: {
        type: DataTypes.STRING
      },
      phone_number: {
        type: DataTypes.STRING
      },
      num_employees: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Shelters;
};