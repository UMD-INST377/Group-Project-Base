export default (sequelize, DataTypes) => {
  const reservation = sequelize.define(
    'reservation',
    {
      reservation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      reservation_date: {
        type: DataTypes.DATE
      },
      customer_id: {
        type: DataTypes.INTEGER
      },
      gallery_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return reservation;
};
