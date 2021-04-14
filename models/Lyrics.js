export default (sequelize, DataTypes) => {
  const Lyrics = sequelize.define(
    'Lyrics',
    {
      lyrics_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      lyric: {
        type: DataTypes.STRING
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Lyrics;
};
