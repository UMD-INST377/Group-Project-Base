export default (sequelize, DataTypes) => {
  const animals = sequelize.define(
    'animals',
    {
      Animal_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      common_name: {
        type: DataTypes.INTEGER
      },
      scientific_name: {
        type: DataTypes.STRING
      },
      aviation: {
        type: DataTypes.INTEGER
      },
      weight: {
        type: DataTypes.INTEGER
      },
      extinction_id: {
        type: DataTypes.INTEGER
      },
      hierarchy_id: {
        type: DataTypes.INTEGER
      },
      lifestyle_id: {
        type: DataTypes.INTEGER
      },
      fight_mode_id: {
        type: DataTypes.INTEGER
      },
      hierarchy_position_hierarchy_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      animal_biome_linking_table_animal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return animals;
};
