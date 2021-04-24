export default (database, DataTypes) => {
  const CreatorRolesLinks = database.define(
    'creators_roles_link',
    {
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      creator_id: {
        type: DataTypes.INTEGER
      },
      role_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return CreatorRolesLinks;
};