export default (sequelize, DataTypes) => {
  const VisitorTransactions = sequelize.define(
    'visitor_transaction',
    {
      transaction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      visitor_id: {
        type: DataTypes.INTEGER
      },
      visitor_transactions: {
        type: DataTypes.DOUBLE
      }
    },
    {freezeTableName: true, timestamps: true}
  );
  return VisitorTransactions;
};
