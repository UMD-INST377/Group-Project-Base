export default (sequelize, DataTypes) => {
  const Performers = sequelize.define(
    'performers',
    {
      artist_id: {
        type: DataTypes.INTEGER
      },
      artist_first_name: {
        type: DataTypes.STRING
      },
      artist_last_name: {
        type: DataTypes.STRING
      },
      country_of_origin: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      birth_date: {
        type: DataTypes.DATE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Performers;
};