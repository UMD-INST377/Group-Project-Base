export default (database, DataTypes) => {
  const Images = database.define(
    'Images',
    {
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Images;
};