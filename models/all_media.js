// const Media stores everything in all_media table
export default (sequelize, DataTypes) => {
  const Media = sequelize.define(
    'all_media',
    {
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      media_title: {
        type: DataTypes.STRING
      },
      media_type: {
        type: DataTypes.STRING
      },
      media_release_year: {
        type: DataTypes.INTEGER
      },
      media_description: {
        type: DataTypes.STRING
      },
      media_duration: {
        type: DataTypes.STRING
      },
      albums_songs_number: {
        type: DataTypes.INTEGER
      },
      television_seasons_number: {
        type: DataTypes.INTEGER
      },
      audience_rating: {
        type: DataTypes.DECIMAL
      },
      show_still_airing: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  // Media.associate does a table join and lets you access data without needing a loop
  // when you get Media, you can get all of the Backgrounds related to it
  Media.associate = (models) => {
    Media.hasMany(models.Backgrounds, {
      foreignKey: 'background_id'
    });
  };
  Media.associate = (models) => {
    Media.hasMany(models.Creators, {
      foreignKey: 'creator_id'
    });
  };
  Media.associate = (models) => {
    Media.hasMany(models.Themes, {
      foreignKey: 'theme_id'
    });
  };
  Media.associate = (models) => {
    Media.hasMany(models.Genres, {
      foreignKey: 'genre_id'
    });
  };
  return Media;
};