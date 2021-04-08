export default (sequelize, DataTypes) => {
  const PlayerBiostats = sequelize.define(
    'player_biostats',
    {
      biostats_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      birthdate: {
        type: DataTypes.DATE
      },
      age: {
        type: DataTypes.INTEGER
      },
      height_inches: {
        type: DataTypes.INTEGER
      },
      weight_pounds: {
        type: DataTypes.INTEGER
      },
      player_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return PlayerBiostats;
};