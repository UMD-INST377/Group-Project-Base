export default (sequelize, DataTypes) => {
    const HallHours = sequelize.define(
      "hall_hours",
      {
        hall_hours_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        day: {
          type: DataTypes.STRING,
        },
        schedule_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hall_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
      },
      { freezeTableName: true, timestamps: false }
    );
    return HallHours;
  };
  