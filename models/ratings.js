export default (sequelize, DataTypes) => {
    const ratings = sequelize.define(
      'ratings',
      {
        rating_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          unique: true,
          primaryKey: true
        },  
        ratings: {
          type: DataTypes.INTEGER
        },
        description: {
          type: DataTypes.TEXT
        },
        song_id: {
            type: DataTypes.INTEGER,
        },
        chart_id: {
            type: DataTypes.INTEGER,
        }
      },
      {freezeTableName: true, timestamps: false}  
    );
    return ratings
};