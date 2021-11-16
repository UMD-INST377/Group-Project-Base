export default (database, DataTypes) => {
  const hierarchy = database.define(
    'hierarchy',
    {
      hierarchy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      class: {
        type: DataTypes.STRING
      },
      phylum: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false}
  );
  return hierarchy;
};
