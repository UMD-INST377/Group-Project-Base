//Alex Ghelman

export default (database, DataTypes) => {
    const Song_Characteristics = database.define(
      'song_characteristics',
      {
        SONG_CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        SONG_ID: {
          type: DataTypes.INTEGER
        },
        CHARACTERISTIC_ID: {
          type: DataTypes.INTEGER
        },
        SONG_CHARACTERISTIC_VALUE: {
          type: DataTypes.INTEGER  
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    
    Song_Characteristics.associate = (models) => {
      Song_Characteristics.belongsTo(models.Songs, {
        foreignKey: 'SONG_ID'
      });
    };

    Song_Characteristics.associate = (models) => {
      Song_Characteristics.belongsTo(models.Characteristics, {
        foreignKey: 'CHARACTERISTIC_ID'
      });
    };
    
    return Song_Characteristics;
  };