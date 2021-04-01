export default (database, DataTypes) => {
  const listings = database.define(
    'listings',
    {
      listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      neighborhood_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      host_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      listing_url: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      listing_name: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      days_avail: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return listings;
};
