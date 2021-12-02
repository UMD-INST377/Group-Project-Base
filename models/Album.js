export default (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'Album',
    {
      album_id: {
        type: DataTypes.INTEGER
      },
      album_name: {
        type: DataTypes.STRING
      },
      album_release_date: {
        type: DataTypes.DATE
      },
      record_label_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Album;
};