export default (Sequelize, DataTypes) => {
    const MediaBackgroundLinks = Sequelize.define(
     'Media',
        {
            media_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            background_id:{
                type: DataTypes.INTEGER
            }
        },
        { freezeTableName: true, timestamps: false }
    )
    return MediaBackgroundLinks;
}