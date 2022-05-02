export default (sequelize, DataTypes) => {
  const song = sequelize.define(
    "song",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },

      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        foreignKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  
  return song;
};
