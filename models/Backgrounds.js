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
  backgrounds.associate = (models) => {
    backgrounds.belongsTo(models.media, {
      foreignKey: 'media_id' // media_id is a fk in backgrounds
    });
  };
  return backgrounds;
};