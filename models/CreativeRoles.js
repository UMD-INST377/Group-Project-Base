export default (database, DataTypes) => {
  const CreativeRoles = database.define(
    'Creative_Roles',
    {
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return CreativeRoles;
};