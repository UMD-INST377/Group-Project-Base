export default (sequelize, DataTypes) => {
    const roles = sequelize.define(
      'roles',
      {
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        actor_id: {
          type: DataTypes.INTEGER
        },
        movie_id: {
          type: DataTypes.INTEGER
        },
        role: {
          type: DataTypes.STRING
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return roles;
  };
  