export default (database, DataTypes) => {
  const Backgrounds = database.define(
    'Backgrounds',
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
  return Backgrounds;
};