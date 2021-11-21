export default (database, DataTypes) => {
    const Players = database.define(
      'players',
      {
        player_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        first_name: {
          type: DataTypes.STRING
        },
        last_name: {
          type: DataTypes.STRING
        },
        height: {
          type: DataTypes.FLOAT
        },
        weight: {
          type: DataTypes.INTEGER
        },
        position: {
            type: DataTypes.STRING
        },
        college: {
            type: DataTypes.STRING
        },
        year_drafted: {
            type: DataTypes.YEAR
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Players;
  };
  