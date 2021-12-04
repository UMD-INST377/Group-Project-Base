export default (sequelize, DataTypes) => {
  const Songs = sequelize.define(
    'songs',
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
      duration: {
        type: DataTypes.TIME
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Songs;
};
