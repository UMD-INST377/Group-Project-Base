export default (sequelize, DataTypes) => {
  const Reviews = sequelize.define(
    "reviews",
    {
      review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      hotel_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      review_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Reviews;
};
