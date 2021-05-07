// Delmar Randolph

export default (database, DataTypes) => {
    const Songs = database.define(
      'songs',
      {
        SONG_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        SONG_NAME: {
          type: DataTypes.STRING
        },
        SONG_POPULARITY: {
          type: DataTypes.INTEGER
        },
        ARTIST_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    Songs.associate = (models) => {
      Songs.belongsTo(models.Artists, {
        foreignKey: 'ARTIST_ID'
      });
    };

    Songs.associate = (models) => {
      Songs.hasMany(models.Song_Characteristics, {
        foreignKey: 'SONG_ID'
      });
    };

    return Songs;
};