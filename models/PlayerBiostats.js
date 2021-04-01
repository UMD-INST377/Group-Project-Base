export default (sequelize, DataTypes) => {
  const PlayerBiostats = sequelize.define(
    'PlayerBiostats',
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
        type: DataTypes.INT
      },
      height_inches: {
        type: DataTypes.INT
      },
      weight_pounds: {
        type: DataTypes.INT
      },
      player_id: {
        type: DataTypes.INT,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return PlayerBiostats;
}