export default (database, DataTypes) => {
    const sales = database.define(
      'sales',
      {
        sales_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        sales_game_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          unique: true
        },
        annual_sales: {
          type: DataTypes.TEXT
        },
        earnings: {
          type: DataTypes.TEXT
        },
        budget: {
          type: DataTypes.TEXT
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return sales;
}
  