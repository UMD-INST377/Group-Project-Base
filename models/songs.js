export default (sequelize, DataTypes) => {
  const songs = sequelize.define(
    'songs',
    {
      song_id: {
        type: DataTypes.CHAR(22),
        allowNull: false,
        primary_key: true,
        unique: true
      },
      name: {
        type: DataTypes.CHAR(22),
        allowNull: false
      },
      duration: {
        type: DataTypes.DECIMAL(7, 3),
        allowNull: false
      },
      is_explicit: {
        type: DataTypes.TINYINT(1),
        allowNull: false
      },
      danceability: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      energy: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      loudness: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      speechiness: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      acousticness: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      instrumentalness: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      liveness: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      valence: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      tempo: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return songs;
};