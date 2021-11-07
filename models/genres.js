export default (database, DataTypes) => {
  const genre = database.define('genre', {
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    genre: {
      type: DataTypes.STRING
    }
  });

  return genre;
};
