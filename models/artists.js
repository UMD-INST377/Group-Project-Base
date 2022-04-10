import { DataTypes } from 'sequelize/types';

export default (database, DataTypes) => {
  const artist = database.define(
    'artist',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

    },
    {freezeTableName: true, timestamps: false}
  );
  return artist;
};