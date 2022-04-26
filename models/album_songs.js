export default (database, DataTypes) => {
  const albumSongs = database.define(
    'album_songs',
    {
      album_id: {
        type: DataTypes.CHAR(22),
        allowNull: false,
        foreignKey: true,
      },
      song_id: {
        type: DataTypes.CHAR(22),
        allowNull: false,
        foreignKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return albumSongs;
};
