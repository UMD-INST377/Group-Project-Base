export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: 'Invalid userid.'
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUnderMaxLen(value) {
            if (value.length > 45) {
              throw new Error('Maximum length of username is 45.');
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      create_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );

  return User;
};