export default (sequelize, DataTypes) => {
    const products = sequelize.define(
      'products',
      {
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        product_description: {
          type: DataTypes.STRING // .TEXT
        },
        product_color: {
            type: DataTypes.STRING
        },
        product_unit_type: {
            type: DataTypes.FLOAT
        },
        family_id: {
            type: DataTypes.INTEGER
        },
        category_id: {
            type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return products;
  };
  