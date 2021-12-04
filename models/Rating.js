export default (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    'rating',
    {
      rating_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      ratings: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      chart_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Rating;
};
