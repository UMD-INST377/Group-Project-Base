export default (database, DataTypes) => {
  const Movies = database.define(
    'movies',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      language_id: {
        type: DataTypes.INTEGER
      },
      availability_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rating_id: {
        type: DataTypes.INTEGER
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tomatometer: {
        type: DataTypes.INTEGER
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Movies;
};