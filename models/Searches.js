export default (sequelize, DataTypes) => {
  const Search = sequelize.define(
    'search',
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
      searchid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: 'Invalid searchid.'
          }
        }
      },
      species_a: {
        type: DataTypes.STRING,
        allowNull: true
      },
      species_b: {
        type: DataTypes.STRING,
        allowNull: false
      },
      common_ancestor: {
        type: DataTypes.STRING,
        allowNull: true
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