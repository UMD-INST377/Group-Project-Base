export default (sequelize, DataTypes) => {
    const ratings = sequelize.define(
      'ratings',
      {
        rating_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },  
        ratings: {
          type: DataTypes.INTEGER
        },
        description: {
          type: DataTypes.STRING
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
      },
      {freezeTableName: true, timestamps: false}  
    );
    return ratings
};