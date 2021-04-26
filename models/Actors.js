export default (sequelize, DataTypes) => {
  const Actors = sequelize.define(
    'Actors',
    {
      actor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      actor_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      director_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      }

    },
    { freezeTableName: true, timestamps: false }
  );
  return Actors;
};
