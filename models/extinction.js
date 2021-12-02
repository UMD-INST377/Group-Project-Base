export default (sequelize, DataTypes) => {
  const extinction = sequelize.define(
    'extinction',
    {
      extinction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cause: {
        type: DataTypes.STRING
      },
      age_species_went_extinct: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return extinction;
};
