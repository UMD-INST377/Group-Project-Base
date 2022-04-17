let epName = 'episode';
export default (database, DataTypes) => {
  const episode = database.define('episode', {
    episode_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    episode_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: epName
    },
    season_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    episode_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    runtime_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return episode;
};