export default (sequelize, DataTypes) => {
  const Query = sequelize.define('queries', {
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'models.users',
        key: 'user_id'
      }
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
    },
    query_match: {
      type: DataTypes.STRING
    },
    match_url: {
      type: DataTypes.STRING
    }
  },
  { freezeTableName: true, timestamps: false });

  return Query;
};
