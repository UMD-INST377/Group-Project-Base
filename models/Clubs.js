export default (sequelize, DataTypes) => {
  const Clubs = sequelize.define(
    "clubs",
    {
      club_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      club_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coach_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coach_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      num_of_players: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Clubs;
};
