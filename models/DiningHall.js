export default (database, DataTypes) => {
  const Albums = database.define(
    'Albums',
    {
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      album_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Albums;
};
