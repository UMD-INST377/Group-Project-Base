export default (database, DataTypes) => {
  const Images = database.define(
    'images',
    {
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      image_url: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Images;
};
