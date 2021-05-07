export default (database, DataTypes) => {
  const Genre = database.define(
    'Genre',
    {
      Genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Genre_title: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Genre;
};