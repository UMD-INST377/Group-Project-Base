export default (sequelize, DataTypes) => {
  const artists = sequelize.define(
    'artists',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      artist_name: {
        type: DataTypes.STRING
      },
      total_artist_album: {
        type: DataTypes.INTEGER
      },
      artist_link:{
        type:DataTypes.BLOB
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artists;
};
