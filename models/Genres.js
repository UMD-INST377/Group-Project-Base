export default (sequelize, DataTypes) => {
  const Genres = sequelize.define(
    'genres',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genre: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  // Genres.associate = (models) => {
  //   Genres.belongsToMany(models.Media, {
  //     foreignKey: 'media_id'
  //   });
  // };
  return Genres;
};