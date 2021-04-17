export default (sequelize, DataTypes) => {
  const Song_info = sequelize.define(
    'Song_info',
    {
      song_info_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      bpm: {
        type: DataTypes.INTEGER
      },
      nrgy: {
        type: DataTypes.STRING
      },
      dB: {
        type: DataTypes.INTEGER
      },
      song_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Song_info;
};