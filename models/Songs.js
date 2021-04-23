export default (sequelize, DataTypes) => {
    const Songs = sequelize.define(
      'Songs',
      {
        song_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING
        },
        genre: {
          type: DataTypes.STRING
        },
        release_date: {
          type: DataTypes.INTEGER
        },
        artist_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        song_length: {
          type: DataTypes.STRING
        },
        album_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Songs;
  };
  