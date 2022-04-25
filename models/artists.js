export default (sequelize, DataTypes) => {
  const artists = sequelize.define(
    'artists',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      artist_name: {
        type: DataTypes.CHAR(45),
        allowNull: false,
      },
      total_artist_albums: {
        type: DataTypes.DECIMAL(5, 1),
      },
      artist_link: {
        type: DataTypes.BLOB
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artists;
};