export default (sequelize, DataTypes) => {
    const visitor_transaction = sequelize.define(
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
    return visitor_transaction;
};
