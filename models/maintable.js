export default (sequelize, DataTypes) => {
    const maintable = sequelize.define(
      'maintable',
      {
        artists: {
          type: DataTypes.CHAR(37),
          allowNull: false
        },
        albums: {
          type: DataTypes.CHAR(67),
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return maintable;
  };
  