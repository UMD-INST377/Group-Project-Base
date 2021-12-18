export default (database, DataTypes) => {
  const eruptionCategory = database.define(
    'eruption_category',
    {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      category: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return eruptionCategory;
};
