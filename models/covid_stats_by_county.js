export default (database, DataTypes) => {
    const CovidStatistics = database.define(
      "covid_statistics_by_county",
      {
        county_ID: {
          type: DataTypes.INTEGER,
        },
        confirmed_deaths: {
          type: DataTypes.INTEGER,
        },
        positive_cases: {
          type: DataTypes.INTEGER,
        },
        county_death_prop: {
          type: DataTypes.FLOAT,
      },
    },
    { freezeTableName: true, timestamps: false }
    
    );
    return CovidStatistics;
  };
  