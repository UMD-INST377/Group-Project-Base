export default (database, DataTypes) => {
  const Websites = database.define(
    'websites',
    {
      website_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      website_name: {
        type: DataTypes.STRING
      },
      Shelters_shelter_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Websites;
};
