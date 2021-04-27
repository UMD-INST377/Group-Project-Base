export default (database, DataTypes) => {
  const scores = database.define(
    'scores',
    {
      scores_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      overall_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cleanliness_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      check_in_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      communication_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      location_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return scores;
};