export default (sequelize, DataTypes) => {
  const Artists = sequelize.define(
    'artists',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      artist_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      monthly_listeners: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  Artists.associate = (models) => {
    Artists.hasOne(models.Songs, {
      foreignKey: 'artist_id'
    });
  };
  return Artists;
};