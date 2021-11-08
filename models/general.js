export default (database, DataTypes) =>{
    const general_information=database.define(
        'general_information',
        {
           game_id:{
               type:DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true
           },
           game_name:{
                type:DataTypes.TEXT,
            },
            release_date:{
                type:DataTypes.TEXT
            },
            free_to_play:{
                type:DataTypes.TEXT
            },
            player_populaion:{
                type:DataTypes.TEXT
            }

        },
        {freezerTableName:true, timestamps:false}
    );
    return general_information;
}