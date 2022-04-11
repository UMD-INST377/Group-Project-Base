export default (sequelize, DataTypes) => {
  const artDesign = sequelize.define(
    'design',
    {
      artwork_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      artwork_title: {
        type: DataTypes.STRING
      },
      year_created: {
        type: DataTypes.DATE
      },
      serial_number: {
        type: DataTypes.INTEGER
      },
      price: {
        type: DataTypes.INTEGER
      },
      discount_price: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artDesign;
};
