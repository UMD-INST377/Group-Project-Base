export default (database, DataTypes) => {
  const albumGenreInfo = database.define(
    'album_genre_info',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return albumGenreInfo;
};
