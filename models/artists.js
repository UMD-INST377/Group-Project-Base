export default (sequelize, DataTypes) => {
  const artists = sequelize.define(
    'artists',
    {
      artist_id: {
        type: DataTypes.CHAR(22),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      artist_name: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artists;
};