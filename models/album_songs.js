export default (database, DataTypes) => {
  const albumSongs = database.define(
    'album_songs',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return albumSongs;
};
