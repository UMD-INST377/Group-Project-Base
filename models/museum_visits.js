export default (sequelize, DataTypes) => {
    const visitorVisits = sequelize.define(
        'museum_visits',
        {
            visitor_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            museum_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            visit_date: {
                type: DataTypes.DATETIME,
                allowNull: false,
                primaryKey: true,
            },
            member_status: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            fk_visitors_has_Museum_info_Museum_info1: {
                type: DataTypes.STRING,
                foreignKey: true,
            },
            fk_visitors_has_Museum_info_visitors1 {
                type: DataTypes.STRING,
                foreignKey: true,
            },
        {freezeTableName: true, timestamps: false}
    );
    return visitorInfo;
};
