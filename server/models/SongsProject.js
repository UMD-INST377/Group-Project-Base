export default (sequelize, DataTypes) => {
  const SongsProject = sequelize.define(
    'songs_project',
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      song_name: {
        type: DataTypes.STRING
      },
      album_name: {
        type: DataTypes.STRING
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_Name: {
        type: DataTypes.STRING
      },
      ratings: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.TIME
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return SongsProject;
};