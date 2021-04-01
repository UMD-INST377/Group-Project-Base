export default (sequelize, DataTypes) => {
  const StadiumInfo = sequelize.define(
    'StadiumInfo',
    {
      stadium_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      year_built: {
        type: DataTypes.INTEGER
      },
      state: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      capacity: {
        type: DataTypes.INTEGER
      },
      team_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return StadiumInfo;
}