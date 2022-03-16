/* 
   don't mess with this file or remove environment entries in the object
   even for your group project, because it will stop your DB from connecting
   due to the many loops in the initializeDB file
   ~ Prof A.
*/

export default {
  development: {
    username: 'student',
    password: 'INST377@UMD',
    database: 'Dining_Hall_Tracker',
    host: '174.129.198.86',
    dialect: 'mysql'
  },
  test: {
    username: 'student',
    password: 'INST377@UMD',
    database: 'Dining_Hall_Tracker',
    host: '174.129.198.86',
    dialect: 'mysql'
  },
  production: {
    username: 'student',
    password: 'INST377@UMD',
    database: 'Dining_Hall_Tracker',
    host: '174.129.198.86',
    dialect: 'mysql'
  }
};
