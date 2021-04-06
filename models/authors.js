export default (database, DataTypes) => {
  const Authors = database.define(
    'authors',
    {
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      country_of_birth: {
        type: DataTypes.STRING
      },
      date_of_birth: {
        type: DataTypes.DATE
      },
      date_of_death: {
        type: DataTypes.DATE
      },
      nationality: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Authors;
};
