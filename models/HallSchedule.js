export default (database, DataTypes) => {
  const HallSchedule = database.define(
    'Hall_Schedule',
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
