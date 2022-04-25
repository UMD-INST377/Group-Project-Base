export default (sequelize, DataTypes) => {
  const Hominidae = sequelize.define(
    'hominidae',
    {
      item: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      GBIF: {
        type: DataTypes.STRING
      },
      scientific_name: {
        type: DataTypes.STRING
      },
      parent_taxon: {
        type: DataTypes.STRING
      },
      common_names: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Hominidae;
};
