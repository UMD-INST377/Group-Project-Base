export default (sequelize, DataTypes) => {
    const Songs = sequelize.define(
        'songs',
        {
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        }
    },
    {freezeTableName: true, timestamps: false}
    );
    Songs.associate = (models) => {
        Songs.hasOne(models.Artists, {
            foreignKey: 'artist_id'
        });
    };
    return Songs;
} ;