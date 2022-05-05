export default (sequelize, DataTypes) => {
  const actors = sequelize.define(
    'actors',
    {
      actor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      age_of_person: {
        type: DataTypes.INTEGER
      },
      home_state: {
        type: DataTypes.STRING
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return actors;
};
