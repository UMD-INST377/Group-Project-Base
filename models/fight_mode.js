export default (sequelize, DataTypes) => {
  const fight_mode = sequelize.define(
    'fight_mode',
    {
      fight_mode_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      special_skill: {
        type: DataTypes.STRING
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return fight_mode;
};
