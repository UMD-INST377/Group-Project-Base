export default (sequelize, DataTypes) => {
  const artistAlbum = sequelize.define(
    'artist_albums',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreginKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return artistAlbum;
};
