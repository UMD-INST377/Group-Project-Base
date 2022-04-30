export default {
  development: {
    username: 'ubuntu',
    password: 'Veracrypt@12!',
    database: 'hispanic_eats',
    host: '174.129.198.86',
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    },
  },
  test: {
    username: 'ubuntu',
    password: 'Veracrypt@12!',
    database: 'hispanic_eats',
    host: '174.129.198.86',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
  production: {
    username: 'ubuntu',
    password: 'Veracrypt@12!',
    database: 'hispanic_eats',
    host: '174.129.198.86',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
};
