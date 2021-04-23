export default (Sequelize, DataTypes) => {
  const MediaThemeLinks = Sequelize.define(
    'all_media_themes_link',
    {
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      theme_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MediaThemeLinks;
};