export default (sequelize, DataTypes) =>{
    const publisher = sequelize.define(
        'publisher',
        {
            publisher_id:{
               type:DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
            },
            publisher_game_id: {
                type:DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
            },

            publisher_name: {
                type:DataTypes.TEXT
               
            }
        },
        {freezerTableName:true, timestamps:false}
    );
    return publisher;
}