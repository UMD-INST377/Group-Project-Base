export default (sequelize, DataTypes) => {
  const artistSongs = sequelize.define(
    'artist_songs',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artistSongs;
};
