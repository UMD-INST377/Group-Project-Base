export default (database, DataTypes) => {
  const Tracks = database.define(
    'tracks',
    {
      track_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      track_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      published_date: {
        type: DataTypes.DATETIME,
        allowNull: false,
      },
      popularity: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Tracks;
};
