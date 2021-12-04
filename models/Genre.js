export default (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'genre',
    {
      restriction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      restriction_type: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Genre;
};
