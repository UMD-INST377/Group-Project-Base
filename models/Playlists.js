export default (database, DataTypes) => {
  const Playlist = database.define(
    'playlists',
    {
      playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      playlist_name: {
        type: DataTypes.STRING
      },
      number_of_songs: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number_of_followers: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_time: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Playlist;
};
