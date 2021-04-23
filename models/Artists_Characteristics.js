//Jared Caplan

export default (sequelize, DataTypes) => {
    const Artistschar = sequelize.define(
      'Artistschar',
      {
        ARTIST_CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ARTIST_ID: {
          type: DataTypes.INTEGER
        },
        CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER
        },
        ARTIST_CHARACTERISTICS_VALUE: {
          type: DataTypes.INTEGER  
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Artistschar;
  };