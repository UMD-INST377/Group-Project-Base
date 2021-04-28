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
      lyrics: {
        type: DataTypes.STRING
      },
      song_id: {
        type: DataTypes.INTEGER,
        allownull: false,
        unique: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Lyrics;
};