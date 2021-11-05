export default (sequelize, DataTypes) => {
  const Universities = sequelize.define(
    'university',
    {
      school_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Universities;
};
