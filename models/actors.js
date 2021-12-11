export default (sequelize, DataTypes) => {
    const Actors = sequelize.define([
        'Actors',
        {
          actor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement:true
          },
          actor: {
            type: DataTypes.STRING
          }
        },
        { freezeTableName: true, timestamps: false }
      );
      return Actors;
    };