export default (database, DataTypes) => {
  const Themes = database.define(
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
  Themes.associate = (models) => {
    Themes.hasMany(models.Media, {
      foreignKey: 'media_id'
    });
  };
  return Themes;
};