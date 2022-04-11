import { DataTypes } from "sequelize/types"

export default (database, DataTypes) => {
    const company = database.define('company', {
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: false,
        }, 
        size: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: false,
        }
    });
    return company;
}