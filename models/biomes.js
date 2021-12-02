export default (sequelize, DataTypes) => {
  const biomes = sequelize.define(
    'biomes',
    {
      biome_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      animal_id: {
        type: DataTypes.INTEGER
      },
      Tropical_Rainforest: {
        type: DataTypes.INTEGER
      },
      Temperate_Forest: {
        type: DataTypes.INTEGER
      },
      Desert: {
        type: DataTypes.INTEGER
      },
      Tundra: {
        type: DataTypes.INTEGER
      },
      Grassland: {
        type: DataTypes.INTEGER
      },
      Savanna: {
        type: DataTypes.INTEGER
      },
      Freshwater: {
        type: DataTypes.INTEGER
      },
      Marine: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return biomes;
};