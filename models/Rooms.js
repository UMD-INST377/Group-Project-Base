export default (sequelize, DataTypes) => {
  const room = sequelize.define(
    'room',
    {
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      room_type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      num_guest: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      room_view: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cost_per_night: {
          type: DataTypes.DECIMAL,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return room;
  };
  