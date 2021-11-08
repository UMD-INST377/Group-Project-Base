export default (database, DataTyles) => {
  const extinction = database.define(
    'extinction',
    {
      extinction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cause: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
      },
      age_species_went_extinct: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
      }
    },
    { freezeTableName: true, timestamps: false}
  );
  return extinction;
};