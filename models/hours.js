// Sravya
export default (database, DataTypes) => {
  const hours = database.define(
    'hours',
    {
      hours_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      // ONLY TIME
      opening_time: {
        type: DataTypes.DATE,
        allowNull: true
      },
      // ONLY TIME
      closing_time: {
        type: DataTypes.DATE,
        allowNull: true
      },
      restaurant_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return hours;
};
