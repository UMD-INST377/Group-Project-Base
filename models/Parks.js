export default (sequelize, DataTypes) => {
  const Parks = sequelize.define(
    'Parks',
    {
      park_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      park_name: {
        type: DataTypes.STRING
      },
      trails: {
        type: DataTypes.STRING
      },
      park_lat: {
        type: DataTypes.DECIMAL
      },
      park_long: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Parks;
};
