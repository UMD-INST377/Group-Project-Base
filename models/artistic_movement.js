export default (sequelize, DataTypes) => {
  const artisticMovement = sequelize.define(
    'artistic_movement',
    {
      artistic_movement_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      movement_name: {
        type: DataTypes.STRING
      },
      start_year: {
        type: DataTypes.INTEGER
      },
      end_year: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return artisticMovement;
};
