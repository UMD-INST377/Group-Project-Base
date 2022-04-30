export default (database, DataTypes) => {
  const Playlist = database.define(
    'playlist',
    {
      playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      music_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      plist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Playlist;
};
