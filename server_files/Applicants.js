export default (database, DataTypes) => {
  const Applicants = database.define(
    'applicants',
    {
      applicant_id: {
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
      email_address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Applicants;
};
