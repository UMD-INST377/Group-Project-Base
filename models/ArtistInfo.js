export default (sequelize, DataTypes) => {
  const ArtistInfo = sequelize.define(
    'artist_info',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      monthly_listeners: {
        type: DataTypes.INTEGER
      },
      followers: {
        type: DataTypes.INTEGER
      },
      world_ranking: {
        type: DataTypes.INTEGER
      },
      artist_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return ArtistInfo;
};
