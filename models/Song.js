
 export default (database, DataTypes) => {
    const Song = database.define(
      'song',
      {
        song_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        album_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        artist_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        song_title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        song_duration: {
          type: DataTypes.STRING,
          allowNull: false
        },  
      },
      { freezeTableName: true, timestamps: false }
    );
    return Song;
  }; 