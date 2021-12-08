/* eslint-disable camelcase */
/* eslint-disable indent */
export default (database, DataTypes) => {
  const Food_Inspection = database.define(
    'Food_Inspection',
    {
        Establishment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Name: {
        type: DataTypes.STRING
        
      },
      Category: {
        type: DataTypes.STRING
      },
      Inspection_Date: {
        type: DataTypes.STRING
      },
      Inspection_Results: {
        type: DataTypes.STRING
      },
      City:{
        type: DataTypes.STRING
      },
      State:{
        type: DataTypes.STRING
      },
      Zip:{
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Food_Inspection;
};