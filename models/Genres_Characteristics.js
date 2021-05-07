//Jared Caplan

export default (sequelize, DataTypes) => {
    const Genreschar = sequelize.define(
      'Genreschar',
      {
        GENRE_CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        GENRE_ID: {
          type: DataTypes.INTEGER
        },
        CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER
        },
        GENRE_CHARACTERISTICS_VALUE: {
          type: DataTypes.INTEGER  
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Genreschar;
  };