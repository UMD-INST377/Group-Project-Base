// why isn't this being used
import Creators from './Creators';

export default (database, DataTypes) => {
  const roles = database.define(
    'roles',
    {
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      role_description: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  roles.associate = (models) => {
    creators.belongsTo(models.roles, {
      foreignKey: 'creator_id'
    });
  };
  return roles;
};