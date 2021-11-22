export default (database, DataTypes) => {
  const biome = database.define(
    "biome",
    {
      biome_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Biome: {
        type: DataTypes.STRING,
      },
      Continent: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return biome;
};
