export default (sequelize, DataTypes) => {
  const SongDetails = sequelize.define(
    "SongDetails",
    {
      song_details_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      acoustrictness: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      danceability: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      energy: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      instrumentalness: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      liveness: {
        type: DataTypes.FLOAT,
        allowNull: false
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
