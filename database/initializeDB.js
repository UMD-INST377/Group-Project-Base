/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable no-console */
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import configOptions from './config.js';
import modelList from '../models/index.js';

const { DataTypes } = Sequelize;
const env = dotenv.config().parsed?.NODE_ENV || 'development';
const config = configOptions[env];

/**
 *  sets our variables from config.js
 *  username, password, database, host, dialect
 */
let sequelizeDB;
if (env !== 'development') {
  sequelizeDB = new Sequelize(process.env[env], config);
} else {
  sequelizeDB = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
// console.log(configOptions.development);

const db = Object.keys(modelList).reduce((collection, modelName) => {
  if (!collection[modelName]) {
    // eslint-disable-next-line no-param-reassign
    collection[modelName] = modelList[modelName](sequelizeDB, DataTypes);
  }
  return collection;
}, {});

const {models} = sequelizeDB;
Object.keys(models).map((modelKey) => models[modelKey])
  .filter((model) => model.associate !== undefined)
  .forEach((model) => model.associate(models));

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

/**
 * Keys for db.sequelizeDB
 * ['options', 'config', 'dialect', 'queryInterface', 'models', 'modelManager', 'connectionManager']
 */
db.sequelizeDB = sequelizeDB;
/**
 * Keys for Sequelize
 * ['version',   'options',   'Utils',   'Op',   'TableHints',   'IndexHints',   'Transaction',   'QueryTypes',   'Validator',   'Model',   'DataTypes',   'ABSTRACT',
 * 'STRING',   'CHAR',   'TEXT',   'NUMBER',   'TINYINT',   'SMALLINT',   'MEDIUMINT',   'INTEGER',   'BIGINT',   'FLOAT',   'TIME',   'DATE',   'DATEONLY',   'BOOLEAN',
 * 'NOW',   'BLOB',   'DECIMAL',   'NUMERIC',   'UUID',   'UUIDV1',   'UUIDV4',   'HSTORE',   'JSON',   'JSONB',   'VIRTUAL',   'ARRAY',   'ENUM',   'RANGE',   'REAL',
 * 'DOUBLE PRECISION',   'DOUBLE',   'GEOMETRY',   'GEOGRAPHY',   'CIDR',   'INET',   'MACADDR',   'CITEXT',   'TSVECTOR',   'postgres',   'mysql',   'mariadb',   'sqlite',
 * 'mssql',   'Deferrable',   'Association',   'useInflection',   '_setupHooks',   'runHooks',   'addHook',   'removeHook',   'hasHook',   'hasHooks',   'beforeValidate',
 * 'afterValidate',   'validationFailed',   'beforeCreate',   'afterCreate',   'beforeDestroy',   'afterDestroy',   'beforeRestore',   'afterRestore',   'beforeUpdate',
 * 'afterUpdate',   'beforeSave',   'afterSave',   'beforeUpsert',   'afterUpsert',   'beforeBulkCreate',   'afterBulkCreate',   'beforeBulkDestroy',   'afterBulkDestroy',
 * 'beforeBulkRestore',   'afterBulkRestore',   'beforeBulkUpdate',   'afterBulkUpdate',   'beforeFind',   'beforeFindAfterExpandIncludeAll',   'beforeFindAfterOptions',
 * 'afterFind',   'beforeCount',   'beforeDefine',   'afterDefine',   'beforeInit',   'afterInit',   'beforeAssociate',   'afterAssociate',   'beforeConnect',   'afterConnect',
 * ... 38 more items ]
 */
db.Sequelize = Sequelize;
export default db;
