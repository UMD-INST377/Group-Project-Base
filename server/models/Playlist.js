export default (sequelize, DataTypes) => {
  const Playlist = sequelize.define(
    'playlist',
    {
      playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      playlist_title: {
        type: DataTypes.STRING
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Playlist;
};
