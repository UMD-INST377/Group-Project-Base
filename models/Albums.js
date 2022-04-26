export default (sequelize, DataTypes) => {
  const albums = sequelize.define(
    'albums',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      number_of_songs: {
        type: DataTypes.DECIMAL(3, 0),
        allowNull: false
      },
      average_song_length: {
        type: DataTypes.DECIMAL(5, 3)
      },
      album_link: {
        type: DataTypes.BLOB,
        allowNull: false
      },
      album_versions: {
        type: DataTypes.DECIMAL(4, 0)
      },
      release_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return albums;
};
