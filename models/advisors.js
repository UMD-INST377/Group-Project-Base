export default (database, DataTypes) => {
  const advisors = database.define('advisors', {
    advisor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: TRUE
    },
    advisor_initials: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false
    }
  });
  return advisors;
}