export default (sequelize, DataTypes) => {
  const genres = sequelize.define(
    'genres',
    {
      genre_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncriment: true,
        primaryKey: true
      },
      genre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'genre_UNIQUE'
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return genres;
};