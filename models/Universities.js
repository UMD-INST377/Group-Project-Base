export default (sequelize, DataTypes) => {
  const Example = sequelize.define(
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

  return Example;
};
