export default (sequelize, DataTypes) => {
  const song = sequelize.define(
    "song",
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },

      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  
  return song;
};
