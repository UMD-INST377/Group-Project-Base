export default (sequelize, DataTypes) => {
  const Songs = sequelize.define(
    'songs',
    {
      song_writer_id: {
        type: DataTypes.INTEGER
      },
      song_writer_first_name: {
        type: DataTypes.STRING
      },
      song_writer_last_name: {
        type: DataTypes.STRING
      },
      song_writer_birth_date: {
        type: DataTypes.DATE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Songs;
};