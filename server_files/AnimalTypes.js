export default (database, DataTypes) => {
  const AnimalType = database.define(
    'animal_type',
    {
      species_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      species_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return AnimalType;
};
