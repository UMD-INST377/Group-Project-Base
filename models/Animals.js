export default (database, DataTypes) => {
  const Animals = database.define(
    'animals',
    {
      animal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      Animal_type_species_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Animals;
};
