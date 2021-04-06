export default (sequelize, DataTypes) => {
    const Museum_Amenity_Link = sequelize.define(
      "museum_amenity_link",
      {
        amenity_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        museum_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Museum_Amenity_Link;
  };