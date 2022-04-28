const newDate = new Date(2019, 3, 15);

export default (database, DataTypes) => {
  const actor = database.define('actors', {
    actor_id: {
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

  return actor;
};