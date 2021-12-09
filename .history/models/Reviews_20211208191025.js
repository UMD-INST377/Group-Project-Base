export default (sequelize, DataTypes) => {
  const reviews = sequelize.define(
    'review',
    {
      review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      review_text: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return reviews;
};