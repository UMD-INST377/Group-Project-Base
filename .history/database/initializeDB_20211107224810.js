import Sequelize from 'sequelize';

import configOptions from './config.js';
import modelList from '../models/index.js';

const { DataTypes } = Sequelize;

const env = process.env.NODE_ENV || 'development';
const config = configOptions[env];

let sequelizeDB;
if (config.use_env_variable) {
  sequelizeDB = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelizeDB = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const db = Object.keys(modelList).reduce((collection, modelName) => {
  if (!collection[modelName]) {
    // eslint-disable-next-line no-param-reassign
    collection[modelName] = modelList[modelName](sequelizeDB, DataTypes);
  }
  return collection;
}, {});

// const models = sequelizeDB.models;
// Object.keys(models).map((modelKey) => models[modelKey])
//   .filter((model) => model.associate !== undefined)
//   .forEach((model) => model.associate(models));

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelizeDB = sequelizeDB;
db.Sequelize = Sequelize;

export default db;
