export default (sequelize, DataTypes) => {
  const SongWriters = sequelize.define(
    'songwriters',
    {
      song_id: {
        type: DataTypes.INTEGER
      },
      track_name: {
        type: DataTypes.STRING
      },
      track_duration: {
        type: DataTypes.DECIMAL
      },
      album_id: {
        type: DataTypes.INTEGER
      },
      explicit: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return SongWriters;
};