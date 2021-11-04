export default(database,DataTypes) =>{
    const price=await db.price.findall();
    const reply=price.length>0?{data:price}:{message:'no result found'};

    return price;
}