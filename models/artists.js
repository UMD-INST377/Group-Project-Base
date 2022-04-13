export default (sequelize, DataTypes) => {
    const artists = sequelize.define(
      'artists',
      {
        artist_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        first_name: {
          type: DataTypes.STRING
        },
        last_name: {
          type: DataTypes.STRING
        },
        country_id: {
            type: DataTypes.STRING
          }
      },
      { freezeTableName: true, timestamps: false }
    );
    return artists;
  };