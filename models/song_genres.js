export default (sequelize, DataTypes) => {
  const songGenres = sequelize.define(
    'song_genres',
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return songGenres;
}