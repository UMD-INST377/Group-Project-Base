export default (sequelize, DataTypes) => {
  const genres = sequelize.define(
    'genres',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      genre_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return genres;
};
