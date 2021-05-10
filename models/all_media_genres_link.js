export default (Sequelize, DataTypes) => {
  const MediaGenreLinks = Sequelize.define(
    'all_media_genres_link',
    {
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genre_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MediaGenreLinks;
};