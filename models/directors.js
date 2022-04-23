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
        age_of_person: {
          type: DataTypes.INTEGER
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
    return directors;
  };
  