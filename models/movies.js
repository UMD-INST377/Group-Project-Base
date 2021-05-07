export default (database, DataTypes) => {
  const movies = database.define(
    'movies',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Title: {
        type: DataTypes.STRING
      },
      Year: {
        type: DataTypes.INTEGER
      },
      Durations: {
        type: DataTypes.INTEGER
      }
      // company_id: {
      //   type: DataTypes.INTEGER,
      //   foreignKey: true
      // },
      // director_id: {
      //   type: DataTypes.INTEGER,
      //   foreignKey: true
      // },
      // Rating_id: {
      //   type: DataTypes.INTEGER,
      //   foreignKey: true
      // }
    },
    { freezeTableName: true, timestamps: false }
  );
  return movies;
};
