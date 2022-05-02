export default (database, DataTypes) => {
  const country = database.define(

    'country',
    {
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      country_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country_nationality: {
        type: DataTypes.STRING,
        allowNull: false
      }

    },
    {freezeTableName: true, timestamps: false}
  );
  return country;
};
