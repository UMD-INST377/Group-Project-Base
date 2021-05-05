export default (sequelize, DataTypes) => {
    const genre = sequelize.define(
      'genre',
      {
        genre_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        genre_name: {
          type: DataTypes.STRING,
          allowNull: true
        },
        fictional: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return genre;
  };