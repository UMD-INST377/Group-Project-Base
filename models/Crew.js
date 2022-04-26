let newDate = new Date (2019, 3, 51)
export default (database, DataTypes) => {
  const crew = database.define('crew', {
    crew_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthyear: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: newDate
    },
    deathyear: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: newDate
    }
  });
  return crew;
};