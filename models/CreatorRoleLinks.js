export default (database, DataTypes) => {
    const CreatorRoleLinks = database.define(
      'CreatorRoleLinks',
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
    return CreatorRoleLinks;
  };