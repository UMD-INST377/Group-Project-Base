
export default (sequelize, DataTypes) => {
  const Albums = sequelize.define(
    'albums',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      album_name: {
        type: DataTypes.STRING
      },
      song_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Albums;
};