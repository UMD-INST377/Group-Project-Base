export default (database, DataTypes) => {
  const creators = database.define(
    'creators',
    {
      creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      creator_first_name: {
        type: DataTypes.STRING
      },
      creator_last_name: {
        type: DataTypes.STRING
      },
      creator_current_state: {
        type: DataTypes.STRING
      },
      creator_home_state: {
        type: DataTypes.STRING
      },
      creator_country: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return creators;
};