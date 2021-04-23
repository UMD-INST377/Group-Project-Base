export default (database, DataTypes) => {
  const themes = database.define(
    'themes',
    {
      theme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      theme: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return themes;
};