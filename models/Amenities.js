export default (sequelize, DataTypes) => {
  const amenity = sequelize.define(
    'amenties',
    {
      attraction_id: {
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
      amenity_description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      amenity_incentive: {
        type: DataTypes.STRING,
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
      accepted_payment: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return amenity;
};
