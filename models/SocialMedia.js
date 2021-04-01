export default (sequelize, DataTypes) => {
  const SocialMedia = sequelize.define(
    'SocialMedia',
    {
      social_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      team_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      platform_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      social_media: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return SocialMedia;
}