/* eslint-disable indent */
export default (database, DataTypes) => {
  const Professional = database.define(
    'Professional Information',
    {
      Professional_Info_ID: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      Chamber: {
        type: DataTypes.VARCHAR
      },
      Start_Year: {
        type: DataTypes.YEAR
      },
      Party_Affiliation: {
        type: DataTypes.VARCHAR
      }
    },
    { freezeTableName: true, timestamps: false }
  );
      return Professional;
    };