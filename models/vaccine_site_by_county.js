export default (database, DataTypes) => {
  const Site = database.define('vaccine_site_by_county', {
    county_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Site;
};
