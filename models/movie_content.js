module.exports = (sequelize, DataTypes) => {
  const movieContent = sequelize.define(
    'movie_content',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genres: {
        type: DataTypes.STRING
      },
      plot_keywords: {
        type: DataTypes.STRING
      },
      content_rating: {
        type: DataTypes.STRING
      },
      language: {
        type: DataTypes.STRING
      },
      
    },
    { freezeTableName: true, timestamps: false }
  );
  return movieContent;
};
