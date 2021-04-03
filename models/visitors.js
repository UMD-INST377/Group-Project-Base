export default (sequelize, DataTypes) => {
  const visitorInfo = sequelize.define(
    'visitor_info',
    {
      visitor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      visitor_fn: {
        type: DataTypes.STRING
      },
      visitor_ln: {
        type: DataTypes.STRING
      },
      visitor_phone_num: {
        type: DataTypes.STRING
      },
      visitor_email: {
        type: DataTypes.STRING
      }
    },
    {freezeTableName: true, timestamps: false}
  );
  return visitorInfo;
};
