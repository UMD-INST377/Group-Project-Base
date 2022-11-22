/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import mysql from 'mysql';
import configOptions from './config.js';

const env = process.env.NODE_ENV || 'development'; // this clause allows us to set our "environment" for development, production, or testing.
const options = configOptions[env]; // this clause picks one of the options from the config file. We only have development set up just now.

const mysqlDB = mysql.createConnection(options); // connect to the database with the options we've stored

const db = {};

db.mysqlDB = mysqlDB;
db.MySql = mysql;

export default db;