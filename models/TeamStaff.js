export default (sequelize, DataTypes) => {
  const TeamStaff = sequelize.define(
    'team_staff',
    {
      staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      { freezeTableName: true, timestamps: false }
    );
    return TeamStaff;
  }