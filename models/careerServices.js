export default (database, DataTypes) => {
  const careerServices = database.define('career_services', {
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true
    },
    service_description: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false
    }
  });
  return careerServices;
}