export default (sequelize, DataTypes) => {
    const publishers = sequelize.define(
      'publishers',
      {
        publisher_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        publisher_name: {
          type: DataTypes.STRING,
          allowNull: true
        },
        in_operation: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return publishers;
  };
  