export default (sequelize, DataTypes) => {
  const genres = sequelize.define(
    'genres',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      genre: {
        type: DataTypes.CHAR(50),
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return genres;
};