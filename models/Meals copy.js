export default (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      genre: {
        type: DataTypes.STRING
     
    },
    { freezeTableName: true, timestamps: false }
  );
  return Genre;
};
