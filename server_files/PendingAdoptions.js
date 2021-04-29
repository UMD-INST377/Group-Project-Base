export default (database, DataTypes) => {
  const PendingAdoptions = database.define(
    'pending_adoptions',
    {
      adopt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Applicants_applicant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Animals_animal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      start_date: {
        type: DataTypes.INTEGER
      },
      end_hold_date: {
        type: DataTypes.INTEGER
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return PendingAdoptions;
};
