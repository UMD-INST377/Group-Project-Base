export default (sequelize, DataTypes) => {
  const genres = sequelize.define(
    'genres',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      genre_name: {
        type: DataTypes.CHAR(45),
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return genres;
};
