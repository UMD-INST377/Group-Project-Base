export default (database, DataTypes) => {
  const Availability = database.define(
    'availability',
    {
      availability_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      is_on_netflix: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      is_on_hulu: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      is_on_prime: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      is_on_disney: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Availability;
};
