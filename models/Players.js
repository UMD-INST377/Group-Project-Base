export default (sequelize, DataTypes) => {
  const Players = sequelize.define(
    "players",
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      club_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      club: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shirt_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      best_player_counter: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Players;
};
