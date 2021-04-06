export default (sequelize, DataTypes) => {
  const genre = sequelize.define(
    'genre',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genre_type: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return genre;
};
