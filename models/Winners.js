export default (sequelize, DataTypes) => {
    const Winners = sequelize.define(
      'winners',
      {
        season_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        club_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        club_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        season: {
          type: DataTypes.STRING,
          allowNull: false
        },
        player_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        best_player: {
          type: DataTypes.STRING,
          allowNull: false
        },
        coach_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
       
      },
      { freezeTableName: true, timestamps: false }
    );
    return Winners;
  };