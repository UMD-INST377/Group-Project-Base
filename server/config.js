import mysql from 'mysql2';
import util from 'util';

const config = {
    db: {
        host: '174.129.198.86',
        user: 'ubuntu',
        password: 'Veracrypt@12!',
        database: 'group3_taxonomy'
    }
};

const connection = mysql.createConnection(config.db);

export default connection;