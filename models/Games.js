export default (database, DataTypes) => {
  const Games = database.define(
    'games',
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      date_played: {
        type: DataTypes.DATE,
      },
      home_team_score: {
        type: DataTypes.INTEGER,
      },
      away_team_score: {
        type: DataTypes.INTEGER,
      },
      home_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      away_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Games;
};
