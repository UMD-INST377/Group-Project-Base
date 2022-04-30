export default (database, DataTypes) => {
  const Album = database.define(
    'album',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      published_date: {
        type: DataTypes.DATETIME,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Album;
};
