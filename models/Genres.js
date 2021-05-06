// Anna Kafrune

export default (sequelize, DataTypes) => {
  const Genres = sequelize.define(
    'genres',
    {
      GENRE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      GENRE_NAME: {
        type: DataTypes.STRING
      },
      GENRE_POPULARITY: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );

  Genres.associate = (models) => {
    Genres.hasMany(models.Artists, {
      foreignKey: 'GENRE_ID'
    });
  };

  return Genres;
};
