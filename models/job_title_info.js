export default (database, DataTypes) => {
  const job = database.define('job_title_info', {
    job_title_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: false,
    },
    infosci_concentration: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: false,
    },
    employer: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: false,
    },
  });
  return job;
};
