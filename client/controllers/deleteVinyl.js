export default (sequelize, DataTypes) => {
  const vinyls = `DELETE *
  FROM vinyls v
  WHERE vinyl_id = 21`
  
  return vinyls
};