export default (sequelize, DataTypes) => {
    const Museum_Amenity = sequelize.define(
      "museum_amenity",
      {
        hall_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        meal_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Museum_Amenity;
  };
  