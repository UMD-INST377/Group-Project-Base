export default (sequelize, DataTypes) => {
    const earnings = sequelize.define(
      'earnings',
      {
        movie_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        earnings_gross: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return earnings;
  };
  