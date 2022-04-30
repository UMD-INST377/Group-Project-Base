export default (database, DataTypes) => {
  const Reviews = database.define('Reviews', {
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    review_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avg_star_rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Reviews;
};
