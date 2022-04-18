import Canidae from './Canidae.js';
import Felinae from './Felinae.js';
import Hominidae from './Hominidae.js';
import Query from './Query.js';
import User from './User.js';

Query.associate = (models) => {
  Query.belongsTo(models.users);
};

export default {
  Canidae,
  Felinae,
  Hominidae,
  Query,
  User
};
