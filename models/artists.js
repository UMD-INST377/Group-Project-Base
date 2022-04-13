export default (sequelize, DataTypes) => {
<<<<<<< HEAD
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
=======
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
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artists;
};
>>>>>>> 38e16c692a6b5d51bc15d6b93eff28b99ef5dfa0
