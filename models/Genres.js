export default (database, DataTypes) => {
  const genres = database.define(
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
  genres.associate = (models) => {
    genres.belongsTo(models.media, {
      foreignKey: 'media_id'
    });
  };
  return genres;
};