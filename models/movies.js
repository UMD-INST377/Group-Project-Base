export default (sequelize, DataTypes) => {
  const movies = sequelize.define(
    'movies',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      duration: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      year: {
        type: DataTypes.INTEGER
      },
      country: {
        type: DataTypes.STRING
      },
      imdb_score: {
        type: DataTypes.FLOAT
      },
      earnings_gross: {
        type: DataTypes.INTEGER
      },
      studio_id: {
        type: DataTypes.INTEGER
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return movies;
};
