// import { DataTypes } from "sequelize/types"

export default (database, DataTypes) => {
    const students = database.define('students', {
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false
        },
        grad_semester: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: false
        },
        grad_year: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false
        },
        infosci_concentration: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: false
        }
    });
    return students;
}