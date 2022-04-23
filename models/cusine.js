// Sravya
export default (sequelize, DataTypes) => {
  const cusine = sequelize.define(
    'cusine',
    {
      cuisine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //  unique: true,
        primaryKey: true
      },
      cuisine_type: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return cusine;
};