export default (sequelize, DataTypes) => {
  const genres = sequelize.define(
    'genres',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      genre: {
        type: DataTypes.CHAR(50),
        allowNull: false,
        unique: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return genres;
};
