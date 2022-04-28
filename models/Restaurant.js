export default (database, DataTypes) => {
  const Restauraunt = database.define('Restaurant', {
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  return Restauraunt;
};
