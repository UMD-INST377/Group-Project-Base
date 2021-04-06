export default (sequelize, DataTypes) => {
  const actor = sequelize.define(
    'actor',
    {
      actor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return actor;
};
