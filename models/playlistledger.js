export default (database, DataTypes) => {
  const Playlistledger = database.define(
    'playlistledger',
    {
      playlist_track_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Playlistledger;
};
