export default (sequelize, DataTypes) => {
  const HallSchedule = sequelize.define(
    'hall_schedule',
    {
      schedule_id: {
        type: DataTypes.STRING
      },
      hours: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return HallSchedule;
};