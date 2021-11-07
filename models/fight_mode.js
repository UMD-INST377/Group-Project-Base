export default (sequelize, DataTypes) => {
  const fight_mode = sequelize.define(
    'fight_mode',
    {
      fight_mode_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      kill_death_ratio: {
        type: DataTypes.DECIMAL
      },
      special_skill: {
        type: DataTypes.STRING
      },
      weapon_of_choice: {
        type: DataTypes.STRING
      },
      power: {
        type: DataTypes.INTEGER
      },
      animals_Animal_ID: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return fight_mode;
};
