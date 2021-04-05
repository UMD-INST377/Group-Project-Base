export default (sequelize, DataTypes) => {
    const Songs = sequelize.define(
        'Songs',
        {
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        song_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        explicit: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {freezeTableName: true, timestamps: false}
    );
    return Songs;
} ;