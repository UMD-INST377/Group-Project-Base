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
      },
      description: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
    Animals.associate = (models) => {
      Animals.hasOne(models.PendingAdoptions, {
        foreignKey: 'animal_id'
      });
    };
  return Animals;
};
