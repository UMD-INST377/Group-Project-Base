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
        type: DataTypes.VARCHAR
      },
      last_name: {
        type: DataTypes.VARCHAR
      },
      director_salary: {
        type: DataTypes.VARCHAR
      }

    },
    { freezeTableName: true, timestamps: false }
  );
  return Director;
};
