export default (sequelize, DataTypes) => {
  const AlbumGenreInfoo = sequelize.define(
    'album_genre_info',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return AlbumGenreInfoo;
};
