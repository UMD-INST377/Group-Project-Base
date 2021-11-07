export default (database, DataTypes) => {
  const County = database.define("county_information", {
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
  return County;
};
