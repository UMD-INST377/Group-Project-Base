//Alex Ghelman

export default (sequelize, DataTypes) => {
    const songchar = sequelize.define(
      'songchar',
      {
        SONG_CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        SONG_ID: {
          type: DataTypes.INTEGER
        },
        CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER
        },
        SONG_CHARACTERISTICS_VALUE: {
          type: DataTypes.INTEGER  
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return songchar;
  };