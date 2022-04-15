export default (database, DataTypes) => {
  const HallSchedule = database.define(
    'hall_schedule',
    {
      schedule_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      hours: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return HallSchedule;
};
