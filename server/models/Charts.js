export default (sequelize, DataTypes) => {
  const Charts = sequelize.define(
    'charts',
    {
      chart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      chart_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Charts;
};
