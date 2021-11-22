export default (database, DataTypes) => {
  const Film = database.define('film', {
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    writer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING
    },
    runtime: {
      type: DataTypes.INTEGER
    },
    year: {
      type: DataTypes.INTEGER
    },
    studio_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    score: {
      type: DataTypes.DOUBLE
    },
    votes: {
      type: DataTypes.INTEGER
    },
    budget: {
      type: DataTypes.INTEGER
    },
    gross: {
      type: DataTypes.INTEGER
    },
    released: {
      type: DataTypes.STRING
    },
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER
    }
  });
  return Film;
};
