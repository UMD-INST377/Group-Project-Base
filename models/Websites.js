export default (database, DataTypes) => {
  const Websites = database.define(
    'Websites',
  {
    website_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Shelters_shelter_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    website_name: {
      type: DataTypes.STRING
    }
  },
  { freezeTableName: true, timestamps: false }
  );
  return Websites;
};

