export default (sequelize, DataTypes) => {
  const albums = sequelize.define(
    'albums',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      album_name: {
        type: DataTypes.STRING
      },
      number_of_songs: {
        type: DataTypes.INTEGER
      },
      average_song_length: {
        type: DataTypes.INTEGER
      },
      album_link: {
        type: DataTypes.BLOB
      },
      album_versions: {
        type: DataTypes.INTEGER
      },
      release_id: {
        type: DataTypes.INTEGER
      },
      artist_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return albums;
};
