export default (sequelize, DataTypes) => {
  const SongDetails = sequelize.define(
    "SongDetails",
    {
      song_details_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return SongDetails;
};
