export default (sequelize, DataTypes) => {
  const artistAlbum = sequelize.define(
    'artist_album',
    {
      album_id: {
        type: DataTypes.CHAR(20),
        allowNull: false,
        foreginKey: true
      },
      style_id: {
        type: DataTypes.CHAR(20),
        allowNull: false,
        foreginKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return artistAlbum;
};
