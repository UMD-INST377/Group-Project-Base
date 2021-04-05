export default (sequelize, DataTypes) => {
    const product_families = sequelize.define(
      'product_families',
      {
        family_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        family_name: {
          type: DataTypes.STRING
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return product_families;
  };
  