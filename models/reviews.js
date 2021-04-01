export default (database, DataTypes) => {
  const reviews = database.define(
    'reviews',
    {
      review_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      host_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reviewer_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      review_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      review_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return reviews;
};
