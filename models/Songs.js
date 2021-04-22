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
        SONG_ID: {
          type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Songs;
};