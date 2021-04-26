// Anna Kafrune

export default (database, DataTypes) => {
  const Artists = database.define(
    'artists',
    {
      ARTIST_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ARTIST_NAME: {
        type: DataTypes.STRING
      },
      ARTIST_POPULARITY: {
        type: DataTypes.INTEGER
      },
      GENRE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  Artists.associate = (models) => {
    Artists.belongsTo(models.Genres, {
      foreignKey: 'GENRE_ID'
    });
  };

  return Artists;
};
