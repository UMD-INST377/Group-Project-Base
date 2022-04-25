// Sravya
export default (database, DataTypes) => {
  const rating = database.define(
    'rating',
    {
      rating_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return rating;
};