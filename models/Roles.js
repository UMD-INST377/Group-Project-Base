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
  return roles;
};