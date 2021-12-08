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
        type: DataTypes.STRING,
        allowNull: false
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false
      },
      aviation: {
        type: DataTypes.STRING.BINARY,
        allowNull: false
      },
      weight_lbs: {
        type: DataTypes.DECIMAL(9, 3),
        allowNull: false
      },
      fight_mode_fight_mode_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hierarchy_hierarchy_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lifestyle_lifestyle_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      extinction_extinction_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return animals;
};
