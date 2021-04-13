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
  return Genres;
};
