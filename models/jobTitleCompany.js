export default (database, DataTypes) => {
  const jobTitleCompany = database.define('job_title_company', {
    job_title_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false, 
      autoIncrement: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    }
  });
  return jobTitleCompany;
}