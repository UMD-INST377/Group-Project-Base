export default (sequelize, DataTypes) => {
  const restaurants = sequelize.define(
    'restaurants',
    {
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      sub_region_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price_range: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cuisine_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      open_time: {
        type: DataTypes.STRING,
        allowNull: false
      },
      close_time: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      street_address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      atmosphere: {
        type: DataTypes.STRING,
        allowNull: false
      },
      accepted_payment: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return restaurants;
};
