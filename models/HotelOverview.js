export default (sequelize, DataTypes) => {
  const HotelOverview = sequelize.define(
    "hotel_overview",
    {
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      hotel_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotel_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sub_region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      street_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotel_rating: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      hotel_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return HotelOverview;
};
