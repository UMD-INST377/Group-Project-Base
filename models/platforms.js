export default (sequelize, DataTypes) =>{
  const platforms = sequelize.define(
      'platforms',
      {
          platform_id:{
             type:DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true
          },
          PC:{
              type:DataTypes.BOOLEAN
          },
          Playstation:{
              type:DataTypes.BOOLEAN
          },
          Xbox:{
              type:DataTypes.BOOLEAN
          },
          Switch:{
              type:DataTypes.BOOLEAN
          },
          Mobile:{
              type:DataTypes.BOOLEAN
          }
      },
      {freezerTableName:true, timestamps:false}
  );
  return platforms;
}