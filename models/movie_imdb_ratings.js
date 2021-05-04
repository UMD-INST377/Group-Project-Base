module.exports = (sequelize, DataTypes) => {
  const movieImdbRatings = sequelize.define(
    'movie_imdb_ratings',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      imdb_score: {
        type: DataTypes.FLOAT
      },
      num_critic_for_reviews: {
        type: DataTypes.INTEGER
      },
      num_user_for_reviews: {
        type: DataTypes.INTEGER
      },
      num_voted_users: {
        type: DataTypes.INTEGER
      },

    },
    { freezeTableName: true, timestamps: false }
  );
  return movieImdbRatings;
};