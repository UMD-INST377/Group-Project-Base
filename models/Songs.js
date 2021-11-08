export default (sequelize, DataTypes) => {
  const songs = sequelize.define(
    'songs',
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      song_name: {
        type: DataTypes.STRING
      },
      explicit: {
        type: DataTypes.INTEGER
      },
      artist_id: {
        type: DataTypes.INTEGER
      },
      album_id: {
        type: DataTypes.INTEGER
      }
    },
    {freezerTableName: true, timestamps: false}
  );
  return songs;
};