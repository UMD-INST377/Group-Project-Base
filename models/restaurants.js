// Sravya
export default (database, DataTypes) => {
  const restaurants = database.define(
    'restaurants',
    {
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      price: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cuisine_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rating_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return restaurants;
};
