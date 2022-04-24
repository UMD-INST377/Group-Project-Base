export default (database, DataTypes) => {
    const genre = database.define(
      'genre',
      {
        genre_id:
            type: DataTypes.INTEGER,
            allowNull: false
      },
        genre_name:
            type: DataTypes.STRING,
            allowNull: false
      },
      { freezeTableName: true, timestamps: false }
    );
    return genre;
  }; 
