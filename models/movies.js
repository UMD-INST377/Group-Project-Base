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
        director_id: {
          type: DataTypes.INTEGER
        },
        movie_name: {
          type: DataTypes.STRING
        },
        movie_year: {
            type: DataTypes.INTEGER
        },
        movie_description: {
          type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
        },
        duration_of_movie: {
            type: DataTypes.INTEGER
        },
    },
    { freezeTableName: true, timestamps: false }
  );
  return movies;
};