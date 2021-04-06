export default (sequelize, DataTypes) => {
    const Museum_Amenity = sequelize.define(
      "museum_amenity",
      {
        amenity_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        amenity_type: {
          type: DataTypesSTRING,
          allowNull: false,
          primaryKey: false
        },
        fk_visitors_has_Museum_info_Museum_info1: {
            type: DataTypes.STRING,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Museum_Amenity;
  };
  