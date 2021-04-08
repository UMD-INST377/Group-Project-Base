export default (database, DataTypes) => {
  const Artists = database.define(
    'Artists',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      artist_name: {
        type: DataTypes.STRING
      },
      artist_popularity: {
        type: DataTypes.INTEGER
      },
      genre_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Artists;
};
