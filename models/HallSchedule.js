export default (database, DataTypes) => {
  const HallSchedule = database.define(
    'Hall_Schedule',
    {
      schedule_id: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        primaryKey: true
      },
      hours: {
        type: DataTypes.VARCHAR
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return HallSchedule;
};
