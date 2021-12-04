export default (database, DataTypes) => {
  const VaccineData = database.define('vaccine_data_by_county', {
    county_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    first_dose_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    first_dose_prop: {
      type: DataTypes.DECIMAL
    },
    second_dose_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    second_dose_prop: {
      type: DataTypes.DECIMAL
    }
  });
  return VaccineData;
};