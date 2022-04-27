export default (database, DataTypes) => {
    const classification = database.define(
      'classification',
      {
        classifiction_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        classifiction_name: {
          type: DataTypes.STRING
        },
        classifiction_address: {
          type: DataTypes.STRING
        },
        classifiction_lat: {
          type: DataTypes.DECIMAL
        },
        classifiction_long: {
          type: DataTypes.DECIMAL
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return classification;



