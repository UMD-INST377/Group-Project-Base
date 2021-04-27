export default (database, DataTypes) => {
  const properties = database.define(
    'properties',
    {
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      property_type: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      room_type: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      accommodates: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bathrooms: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      beds: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return properties;
};
