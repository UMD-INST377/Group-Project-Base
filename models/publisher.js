export default (sequelize, DataTypes) => {
    const Publishers = sequelize.define(
      'Publishers',
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
    return Publishers;
  };
  