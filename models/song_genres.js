export default (sequelize, DataTypes) => {
  const songGenres = sequelize.define(
    'song_genres',
    {
      song_id: {
        type: DataTypes.CHAR(22),
        allowNull: false,
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