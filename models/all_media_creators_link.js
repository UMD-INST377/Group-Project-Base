export default (Sequelize, DataTypes) => {
  const MediaCreatorLinks = Sequelize.define(
    'all_media_creators_link',
    {
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      creator_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MediaCreatorLinks;
};