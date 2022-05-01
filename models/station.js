export default (database, DataTypes) => {
  const Station = database.define(
    'station',
    {
      outlet_podcastid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      outlet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      station_ledger_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      playlist_ledg_id: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Station;
};
