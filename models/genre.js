export default (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'genre',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      genre_name: {
        type: DataTypes.STRING
      },
      fictional: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Genre;
};
