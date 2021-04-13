export default (sequelize, DataTypes) => {
    const Albums = sequelize.define(
        "albums",
        {
            album_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
              },
            album_name: {
                type: DataTypes.STRING,
                allowNull: false
              },
            number_songs: {
                type: DataTypes.INTEGER,
                allowNull: false,
              }, 
            genre: {
                type: DataTypes.STRING,
                allowNull: false
              },
            artist_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }          
        },
        { freezeTableName: true, timestamps: false }
        );
        return Albums;     
    }