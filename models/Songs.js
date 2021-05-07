export default (sequelize, DataTypes) => {
  const Songs = sequelize.define(
    'Songs',
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      genre: {
        type: DataTypes.STRING
      },
      date_released: {
        type: DataTypes.DATEONLY
      },
      album_name: {
        type: DataTypes.STRING
      },
      explicit: {
        type: DataTypes.STRING
      },
      artist_id: {
        type: DataTypes.INTEGER
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Songs;
};
