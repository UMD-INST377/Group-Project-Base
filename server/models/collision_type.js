// This is essentially defining what we are pulling from the tables in the crashes database
// Instead of writing SQL queries, we can just define what we want our tables to look like through here.

export default (sequelize, DataTypes) => {
  const collision_type = sequelize.define(
    'collision_type',
    {
      collision_type_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        primaryKey: true
      },
      collision_desc: {
        type: DataTypes.STRING
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return collision_type;
};
