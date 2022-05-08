/* 
   don't mess with this file or remove environment entries in the object
   even for your group project, because it will stop your DB from connecting
   due to the many loops in the initializeDB file
   ~ Prof A.
*/

export default {
  development: {
    username: 'ubuntu',
    password: 'Veracrypt@12!',
    database: 'ischool',
    host: '174.129.198.86',
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  },
  test: {
    username: 'ubuntu',
    password: 'Veracrypt@12!',
    database: 'ischool',
    host: '174.129.198.86',
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  },
  production: {
    username: 'ubuntu',
    password: 'Veracrypt@12!',
    database: 'ischool',
    host: '174.129.198.86',
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
};
