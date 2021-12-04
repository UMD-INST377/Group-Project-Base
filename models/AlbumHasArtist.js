export default (sequelize, DataTypes) => {
  const AlbumHasArtist = sequelize.define(
    'album_has_artist',
    {
      album_artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      artist_id: {
        type: DataTypes.INTEGER
      },
      album_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return AlbumHasArtist;
};
