export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      create_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return User;
};