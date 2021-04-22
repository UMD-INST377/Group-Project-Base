const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('AAPI_Art_Corner_377', 'student', 'INST377@UMD', {
    host: 'localhost',
    dialect: 'mysql'
});