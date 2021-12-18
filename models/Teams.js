export default (database, DataTypes) => {
  const Teams = database.define(
    'teams',
    {
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      team_name: {
        type: DataTypes.STRING
      },
      conference: {
        type: DataTypes.STRING
      },
      division: {
        type: DataTypes.STRING
      },
      coach: {
        type: DataTypes.STRING
      },
      general_manager: {
        type: DataTypes.STRING
      },
      arena_id: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Teams;
};
