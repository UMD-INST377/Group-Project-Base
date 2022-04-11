export default (sequelize, DataTypes) => {
    const galleries = sequelize.define(
      'gallery',
      {
        gallery_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        capacity: {
          type: DataTypes.INTEGER
        },
        gallery_name: {
          type: DataTypes.STRING
        },
        email: {
          type: DataTypes.STRING
        },
        street_address: {
          type: DataTypes.STRING
        },
        city: {
          type: DataTypes.STRING
        },
        state: {
          type: DataTypes.STRING
        },
        zipcode: {
          type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return galleries;
  };
  