export default (database, DataTypes) => {
  const Personal = database.define(
    'Personal Information',
    {
      Personal_Info_ID: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      First_Name: {
        type: DataTypes.VARCHAR
      },
      Age: {
        type: DataTypes.INTEGER
      },
      Gender: {
        type: DataTypes.VARCHAR
      },
      Date_Of_Birth: {
        type: DataTypes.DATE
      },
      Race: {
        type: DataTypes.VARCHAR
      },
      Last_Name: {
        type: DataTypes.VARCHAR
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return personal;
};