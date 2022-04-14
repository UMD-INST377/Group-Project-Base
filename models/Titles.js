let newDate = new Date (2019, 3, 51)
let film = 'Film'

export default (database, DataTypes) => {
  const title = database.define('title', {
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    primary_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: film
    },
    title_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: film,
    },
    release_year: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: newDate
    },
    end_year: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: newDate
    },
    language: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_adult: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    title_rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    title_votes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    runtime_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  });
  return title
};