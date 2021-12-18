export default (database, DataTypes) => {
  const eruptionAoa = database.define(
    'eruption_aoa',
    {
      aoa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      aoa: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return eruptionAoa;
};
