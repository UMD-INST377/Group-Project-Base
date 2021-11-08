export default (database, DataTypes) => {
  const LifeStyle = database.define(
    'Life_Style',
    {
      lifestyle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      pack: {
        type: DataTypes.STRING
      },
      domestication: {
        type: DataTypes.STRING
      },
      diet: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return lifestyle;
};
