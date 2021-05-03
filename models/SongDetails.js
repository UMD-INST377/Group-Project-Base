export default (sequelize, DataTypes) => {
  const SongDetails = sequelize.define(
    "song_details",
    {
      song_details_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      acousticness: {
        type: DataTypes.FLOAT,
        allowNull: true
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
        unique: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return SongDetails;
};
