export default (sequelize, DataTypes) => {
  const reviews = sequelize.define(
    'review',
    {
      review_id: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return reviews;
};