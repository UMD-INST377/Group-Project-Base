export default (sequelize, DataTypes) => {
    const Films = sequelize.define(
        'Films',
        {
          film_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement:true
          },
          name: {
            type: DataTypes.STRING
          },
          director_id: {
            type: DataTypes.INTEGER
          },
          writer_id: {
            type: DataTypes.INTEGER
          },
          genre_id: {
            type: DataTypes.INTEGER
          },
          country: {
            type: DataTypes.STRING
          }
        },
        { freezeTableName: true, timestamps: false }
    );
    return Films;
    };