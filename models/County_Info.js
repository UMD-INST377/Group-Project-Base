export default (sequelize, DataTypes) => {
  const COUNTY = database.define("county", {
    county_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    county: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    population_density: {
      type: DataTypes.INTEGER,
    },
    uninsured: {
      type: DataTypes.DECIMAL,
    },
    poverty_rate: {
      type: DataTypes.DECIMAL,
    },
  });
  return county;
};
