export default (sequelize, DataTypes) => {
  const songs = sequelize.define(
    "songs",
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      song_name: {
        type: DataTypes.STRING,
      },

      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  
  return songs;
};
