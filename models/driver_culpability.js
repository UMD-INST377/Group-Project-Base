export default (sequelize, DataTypes) => {
  const driver_culpability = sequelize.define(
    'driver_culpability',
    {
      culpability_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        primaryKey: true
      },
      culpability_desc: {
        type: DataTypes.STRING
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return driver_culpability;
};
