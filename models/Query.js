export default (sequelize, DataTypes) => {
  const Query = sequelize.define(
    'queries',
    {
      query_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      create_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      input_string_1: {
        type: DataTypes.STRING
      },
      input_string_2: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Query;
};
