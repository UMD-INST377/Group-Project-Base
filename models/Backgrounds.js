export default (database, DataTypes) => {
  const backgrounds = database.define(
    'backgrounds',
    {
      background_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      background: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return backgrounds;
};