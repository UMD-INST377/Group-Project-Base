export default (database, DataTypes) =>{
    const Price=databse.define(
        'Price',
        {
           price_id:{
               type:DataTypes.INTERGER,
               allowNull: false,
               primaryKey: true
           },
           range_game_id:{
                type:DataTypes.INTERGER,
            },
            price_website:{
                type:DataTypes.TEXT
            },
            listed_price:{
                type:DataTypes.DOUBLE
            },

        },
        {freezerTableName:true, timestamps:false}
    );
    return Price;
}