export default (sequelize, DataTypes) => {
    const road_conditions = sequelize.define(
      'road_conditions',
      {
        junction_code: {
          type: DataTypes.INTEGER,
          allowNull: true,
          unique: true,
          primaryKey: true
        },
        junction_desc: {
          type: DataTypes.STRING
        },
        surf_cond_code: {
            type: DataTypes.INTEGER
          },
        surf_cond_desc: {
            type: DataTypes.STRING
          },
        rd_div_code: {
            type: DataTypes.INTEGER
          },
        rd_div_desc: {
            type: DataTypes.STRING 
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return road_conditions;
  };