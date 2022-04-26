export default (sequelize, DataTypes) => {
  const playlists = sequelize.define(
    'playlists',
    {
      playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      owner: {
        type: DataTypes.CHAR(40),
        allowNull: false
      },
      name: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      description: {
        type: DataTypes.CHAR(200)
      },
      is_public: {
        type: DataTypes.TinyInt(1),
        allowNull: false
      },
      is_collaborative: {
        type: Datatype.TinyInt(1),
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return playlists;
};
