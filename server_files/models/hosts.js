export default (database, DataTypes) => {
    const hosts = database.define(
      'hosts',
      {
        host_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        host_name: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
        host_start_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        host_location: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
        host_response_time: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
        host_response_rate: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return hosts;
  };

