export default (database, DataTypes) => {
  const calendar = database.define(
    'calendar',
    {
      calendar_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stay_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      availability: {
        type: DataTypes.STRING(2),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      min_nights: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_nights: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return calendar;
};
