export default (sequelize, DataTypes) => {
    const Playlists = sequelize.define(
      'playlists',
      {
        playlist_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        playlist_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Playlists;
  };