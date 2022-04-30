export default (database, DataTypes) => {
  const Music = database.define(
    'music',
    {
      music_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      track_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Music;
};