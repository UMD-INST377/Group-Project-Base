export default (sequelize, DataTypes) => {
  const albums = sequelize.define(
    'albums',
    {
      album_id: {
        type: DataTypes.CHAR(22),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      label: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      cover_url: {
        type: DataTypes.CHAR(100)
      },
      album_name: {
        type: DataTypes.CHAR(80),
        allowNull: false
      }
      
    },
    { freezeTableName: true, timestamps: false }
  );
  return albums;
};
