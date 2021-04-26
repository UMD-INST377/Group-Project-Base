export default (sequelize, DataTypes) => {
  const popularBooks = sequelize.define(
    'popular_books',
    {
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },

      title: {
        type: DataTypes.STRING
      },

      amount_sold: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      publish_year: {
        type: DataTypes.INTEGER,
        allowNull: false

      },

      original_language: {
        type: DataTypes.STRING

      },


      public_domain: {
        type: DataTypes.BOOLEAN 

      },

      google_user_percentage: {
        type: DataTypes.DECIMAL,
        allowNull: false

      },

      authors_author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true

      },

      publishers_publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true

      },

      artistic_movement_artistic_movement_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true

      },

      book_retailers_retailer_id: {
        type: DataTypes.INTEGER,
        allowNull: false

      },

      book_description_description_id: {
        type: DataTypes.INTEGER,
        allowNull: false

      }


    },
    { freezeTableName: true, timestamps: false }
  );
  return popularBooks;
};