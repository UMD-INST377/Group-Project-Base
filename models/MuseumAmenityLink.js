export default (sequelize, DataTypes) => {
  const MuseumAmenityLink = sequelize.define(
    'museum_amenity_link',
    {
      amenity_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      museum_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MuseumAmenityLink;
};