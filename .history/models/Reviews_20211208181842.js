export default (sequelize, DataTypes) => {
    const restaurants = sequelize.define(
      'review',
      {
        review_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
   