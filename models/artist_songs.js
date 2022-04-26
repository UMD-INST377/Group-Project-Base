export default (sequelize, DataTypes) => {
  const artistSongs = sequelize.define(
    'artist_songs',
    {
      album_id: {
        type: DataTypes.CHAR(22),
        allowNull: false
      },
      song_id: {
        type: DataTypes.CHAR(22),
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artistSongs;
};
