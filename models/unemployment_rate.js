export default (database, DataTypes) => {
    const unemploymentRate = database.define(
        "unemployment_rate", {
            county_ID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rate: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
        }, { freezeTableName: true, timestamps: false }
    );
    return unemploymentRate;
};