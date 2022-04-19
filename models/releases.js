export default (sequelize, DataTypes) => {
  const releases = sequelize.define(
    'releases',
    {
      release_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      release_country: {
        type: DataTypes.CHAR(45),
        allowNull: false
      },
      release_year: {
        type: DataTypes.INTEGER,
        default: null
      },
      release_link: {
        type: DataTypes.BLOB,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return releases;
};
