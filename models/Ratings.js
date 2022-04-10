export default (database, DataTypes) => {
  const Ratings = database.define(
    'ratings',
    {
      rating_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Ratings;
};