export default (sequelize, DataTypes) => {
  const PlayerInfo = sequelize.define(
    'player_info',
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      salary: {
        type: DataTypes.INTEGER
      },
      jersey_number: {
        type: DataTypes.INTEGER
      },
      position: {
        type: DataTypes.STRING
      },
      player_college: {
        type: DataTypes.STRING
      },
      nba_debut: {
        type: DataTypes.INTEGER
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      team_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return PlayerInfo;
};