export default (sequelize, DataTypes) => {
  const TeamStaff = sequelize.define(
    'team_staff',
    {
      staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      owner: {
        type: DataTypes.STRING
      },
      head_coach: {
        type: DataTypes.STRING
      },
      head_physician: {
        type: DataTypes.STRING
      },
      general_manager: {
        type: DataTypes.STRING
      },
      ceo: {
        type: DataTypes.STRING
      },
      cfo: {
        type: DataTypes.STRING
      },
      team_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return TeamStaff;
}