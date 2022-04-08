export default (database, DataTypes) => {
  const Contributions = database.define(
    'Contributions',
    {
      contribution_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      person_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Contributions;
};