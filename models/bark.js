export default (database, DataTypes) => {
    const bark = database.define(
      'bark',
      {
        bark_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        bark_name: {
          type: DataTypes.STRING
        },
        bark_address: {
          type: DataTypes.STRING
        },
        bark_lat: {
          type: DataTypes.DECIMAL
        },
        bark_long: {
          type: DataTypes.DECIMAL
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return bark;
  };
