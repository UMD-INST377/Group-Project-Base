module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define(
    'movie',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      movie_title: {
        type: DataTypes.STRING
      },
      title_year: {
        type: DataTypes.INTEGER
      },
      country: {
        type: DataTypes.STRING
      },
      director_name: {
        type: DataTypes.STRING
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return movie;
};
