export default (Sequelize, DataTypes) => {
    const MediaGenreLinks = Sequelize.define(
     'Media',
        {
            media_id: {
                type: DataTypes.INTEGER,
                allowNull = false,
                primaryKey = true,
            },
            genre_id:{
                type: DataTypes.INTEGER
            }
        },
        { freezeTableName: true, timestamps: false }
    )
    return MediaGenreLinks;
}