export default (sequelize, DataTypes) => {
  const MuseumAmenity = sequelize.define(
    'museum_amenity',
    {
      amenity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      amenity_type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MuseumAmenity;
};
