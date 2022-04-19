export default (database, DataTypes) => {
  const album = database.define(
    'album',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      release_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      album_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return album;
};