export default (database, DataTypes) => {
  const albumSongs = database.define(
    'albums',
    {
      album_id: {
        type: DataTypes.CHAR(22),
        allowNull: false,
        primaryKey: true
      },
      release_date: {
        type: DataTypes.DATE,
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
