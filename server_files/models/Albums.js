// Andrea Tavakol

export default (database, DataTypes) => {
    const Albums = database.define(
      'albums',
      {
        ALBUM_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ALBUM_NAME: {
          type: DataTypes.STRING
        },
        ALBUM_POPULARITY: {
          type: DataTypes.INTEGER
        },
        GENRE_ID: {
          type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Albums;
};