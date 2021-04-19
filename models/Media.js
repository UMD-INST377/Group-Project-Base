export default (database, DataTypes) => {
    const media = database.define(
        'Media',
        {
            media_id: {
                type: DataTypes.INTEGER,
                allowNull: false, 
                primaryKey: true
            },
            media_title: {
                type: DataTypes.STRING
            },
            media_type: {
                type: DataTypes.STRING
            },
            media_release_year: {
                type: DataTypes.INTEGER
            },
            media_description: {
                type: DataTypes.STRING
            },
            media_duration: {
                type: DateTypes.STRING
            },
            albums_songs_number : {
                type: DataTypes.INTEGER
            },
            television_seasons_number: {
                type: DataTypes.INTEGER
            },
            audience_rating :{
                type: DataTypes.DECIMAL
            },
            show_still_airing: {
                type: DataTypes.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    )
    return media;
}