export default (sequelize, DataTypes) => {
    const USTop50 = sequelize.define(
      "USTop50",
      {
        us_top50_rank: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        streams: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        playlist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return USTop50;
  };