export default (sequelize, DataTypes) => {
  const directors = sequelize.define(
    'directors',
    {
      director_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      director_fname: {
        type: DataTypes.STRING
      },
      director_lname: {
        type: DataTypes.STRING
      },
      home_state: {
        type: DataTypes.STRING
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return directors;
};
