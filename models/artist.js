export default (sequelize, DataTypes) => {
    const artist = sequelize.define(
      'artist',
      {
        artist_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },  
        first_name: {
          type: DataTypes.STRING
        },

        last_name: {
          type: DataTypes.STRING
        },
      },
      {freezeTableName: true, timestamps: false}  
    );
    return artist
};