export default (database, DataTypes) => {
    const Games = database.define(
      'games',
      {
        game_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        date_played: {
          type: DataTypes.DATETIME
        },
        home_team_score: {
          type: DataTypes.INTEGER
        },
        away_team_score: {
          type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Games;
  };
  