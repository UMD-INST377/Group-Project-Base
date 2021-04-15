//Jared Caplan

export default (database, DataTypes) => {
    const Characteristics = database.define(
      'Characteristics',
      {
        CHARACTERISTICS_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        CHARACTERISTICS_NAME: {
            type: DataTypes.STRING
        },
        CHARACTERISTICS_DESCRIPTION: {
            type: DataTypes.STRING
        }
    },

    { freezeTableName: true, timestamps: false }
    );
    return Characteristics;
};