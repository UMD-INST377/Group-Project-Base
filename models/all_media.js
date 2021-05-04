import Backgrounds from './Backgrounds';
import Creators from './Creators';
import Genres from './Genres';
import Themes from './Themes';

// const media stores everything in all_media table
export default (database, DataTypes) => {
  const media = database.define(
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
  media.associate = (models) => {
    Backgrounds.belongsTo(models.media, {
      foreignKey: 'background_id' // linking primary key of media table to backgrounds. now, it's the foreign key in the backgrounds table
    });
  };
  media.associate = (models) => {
    Creators.belongsTo(models.media, {
      foreignKey: 'creator_id' 
    });
  };
  media.associate = (models) => {
    Themes.belongsTo(models.media, {
      foreignKey: 'theme_id'
    });
  };
  media.associate = (models) => {
    Genres.belongsTo(models.media, {
      foreignKey: 'genre_id'
    });
  };
  return media;
};