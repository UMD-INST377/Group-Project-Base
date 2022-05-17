export default (database, DataTypes) => {
  const DiningHours = database.define(
    'hall_hours',
    {
      hall_hours_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      day: {
        type: DataTypes.STRING
      },
      schedule_id: {
        type: DataTypes.STRING
      },
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return DiningHours;
};