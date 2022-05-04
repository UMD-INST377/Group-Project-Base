export default (database, DataTypes) => {
  const albumSongs = database.define(
    'albums',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncriment: true,
        primaryKey: true
      },
      release_date: {
        type: DataTypes.STRING(400),
        allowNull: false
      },
      label: {
        type: DataTypes.STRING(400),
        allowNull: false
      },
      cover_url: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      album_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    }, { freezeTableName: true, timestamps: false }
  );
  return albumSongs;
};
