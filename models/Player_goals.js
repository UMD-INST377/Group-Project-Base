export default (sequelize, DataTypes) => {
    const Player_goals = sequelize.define(
        'player_goals',
        {
            player_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              unique: true,
              primaryKey: true
            },
            first_name: {
              type: DataTypes.STRING,
              allowNull: false
            },
            last_name: {
              type: DataTypes.STRING,
              allowNull: false
            },
            goals: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            assists: {
              type: DataTypes.INTEGER,
              allowNull: false
            }
          },
          { freezeTableName: true, timestamps: false }
    );
    return Player_goals;
};