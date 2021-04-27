//Jared Caplan

export default (database, DataTypes) => {
    const Characteristics = database.define(
      'characteristics',
      {
        CHARACTERISTIC_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        CHARACTERISTIC_NAME: {
            type: DataTypes.STRING
        },
        CHARACTERISTIC_DESCRIPTION: {
            type: DataTypes.STRING
        },
      },

      { freezeTableName: true, timestamps: false }
    );

    Characteristics.associate = (models) => {
      Characteristics.hasMany(models.Song_Characteristics, {
        foreignKey: 'CHARACTERISTIC_ID'
      });
    };

    return Characteristics;
};