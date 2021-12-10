/*
export default (sequelize, DataTypes) => {
  const vehicle_data = sequelize.define(
    'vehicle_data',
    {
      report_id: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        primaryKey: true
      },
      vin_num: {
        type: DataTypes.STRING,
        // allowNull: true
      },
      harm_code_event: {
        type: DataTypes.INTEGER
      },
      harm_event_desc: {
        type: DataTypes.STRING
      },
      towed_away: {
        type: DataTypes.STRING
      },
      airbag_deployed: {
        type: DataTypes.STRING
      },
      hit_and_run: {
        type: DataType.STRING
      },
      speed_limit: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return vehicle_data;
};
*/