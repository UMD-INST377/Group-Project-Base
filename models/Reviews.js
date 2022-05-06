export default (sequelize, DataTypes) => {
  const Reviews = sequelize.define(
    'Reviews',
    {
      review_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      park_id: {
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Reviews;
};
