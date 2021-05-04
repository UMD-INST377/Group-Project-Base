// BROKEN IMPORT

// import Media from './all_media.js';

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
  themes.associate = (models) => {
    themes.belongsTo(models.media, {
      foreignKey: 'media_id'
    });
  };
  return themes;
};