export default (database, DataTypes) => {
  const PendingAdoptions = database.define(
    'pending_adoptions',
    {
      adopt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      applicant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      animal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      start_date: {
        type: DataTypes.STRING
      },
      end_hold_date: {
        type: DataTypes.STRING
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return PendingAdoptions;
};
