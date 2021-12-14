export default (database, DataTypes) => {
  const vei = database.define(
    'vei',
    {
      vei_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      vei: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return vei;
};