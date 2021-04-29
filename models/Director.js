export default (sequelize, DataTypes) => {
  const Director = sequelize.define(
    'Director',
    {
      director_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      director_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

    },
    { freezeTableName: true, timestamps: false }
  );
  return Director;
};
