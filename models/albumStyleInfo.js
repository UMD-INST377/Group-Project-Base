export default (sequelize, DataTypes) => {
  const albumStyleInfo = sequelize.define(
    'album_style_info',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreginKey: true
      },
      style_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreginKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return albumStyleInfo;
};
