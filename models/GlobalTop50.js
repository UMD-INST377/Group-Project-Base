export default (sequelize, DataTypes) => {
    const GlobalTop50 = sequelize.define(
      "global_top50",
      {
        global_top50_rank: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
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
    return GlobalTop50;
  };