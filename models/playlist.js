export default (sequelize, DataTypes) => {
    const playlist = sequelize.define(
      'playlist',
      {
        playlist_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        playlist_title: {
          type: DataTypes.STRING
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true
          }
      },
      { freezeTableName: true, timestamps: false }
    );
    return playlist;
  };
 