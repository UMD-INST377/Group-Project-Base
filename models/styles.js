export default (sequelize, DataTypes) => {
  const styles = sequelize.define(
    'styles',
    {
      style_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      style_name: {
        type: DataTypes.CHAR(45),
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return styles;
};
