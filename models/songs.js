export default (sequelize, DataTypes) => {
  const songs = sequelize.define(
    'songs',
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primary_key: true,
        unique: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.CHAR(80),
        allowNull: false
      },
      duration: {
        type: DataTypes.DECIMAL(7, 3),
        
      },
      is_explicit: {
        type: DataTypes.TINYINT(1),
        allowNull: false
      },
      danceability: {
        type: DataTypes.DOUBLE
        
      },
      energy: {
        type: DataTypes.DOUBLE
        
      },
      loudness: {
        type: DataTypes.DOUBLE
        
      },
      speechiness: {
        type: DataTypes.DOUBLE
        
      },
      acousticness: {
        type: DataTypes.DOUBLE
        
      },
      instrumentalness: {
        type: DataTypes.DOUBLE
        
      },
      liveness: {
        type: DataTypes.DOUBLE
        
      },
      valence: {
        type: DataTypes.DOUBLE
        
      },
      tempo: {
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return songs;
};