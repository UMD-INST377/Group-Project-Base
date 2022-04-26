export default (sequelize, DataTypes) => {
  const playlistSongs = sequelize.define(
    'playlist_songs',
    {
      playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      song_id: {
        type: DataTypes.CHAR(22),
        allowNull: false
      },
      added_by: {
        type: DataTypes.CHAR(50)
      },
      date_added: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return playlistSongs;
};