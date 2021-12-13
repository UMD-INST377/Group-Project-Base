export default (database, DataTypes) => {
  const Memberstest = database.define(
    'Congress_Members',
    {
      Member_ID: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      Member_Full_Name: {
        type: DataTypes.STRING
      },
      Personal_Info_ID: {
        type: DataTypes.INTEGER
      },
      Contact_Info_ID: {
        type: DataTypes.INTEGER
      },
      Professional_Info_ID: {
        type: DataTypes.INTEGER
      },
      Covid_Stimulus_Vote_Number: {
        type: DataTypes.INTEGER
      },
      Internet_Profile_ID: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Memberstest;
};