import mysql from 'mysql';
import util from 'util';

const config = {
    db: {
        host: '174.129.198.86',
        user: 'ubuntu',
        password: 'Veracrypt@12!',
        database: 'group3_taxonomy'
    },
    listPerPage: 10,
};

const connection = mysql.createConnection(config.db);


connection.connect((error) => {
    if (error) {
        console.log(error);
    }
    console.log('You are now connected...')
});

//const query = util.promisify(connection.query).bind(connection);

export default connection;