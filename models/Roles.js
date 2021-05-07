export default (database, DataTypes) => {
  const Roles = database.define(
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
  Roles.associate = (models) => {
    Roles.hasMany(models.Creators, {
      foreignKey: 'creator_id'
    });
  };
  return Roles;
};