/* eslint-disable no-console */

// export into controllers later?
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the AAPI Art Corner API!');
});

/// /////////////////////////////////
/// ////Media Endpoints////////
/// /////////////////////////////////
router
  .route('/media')
  .get(async (req, res) => {
    try {
      console.log('GET request on /media');
      const media = await db.Media.findAll();
      const reply = media.length > 0 ? { data: media } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const media = await db.Media.findAll();
    const currentId = (await media.length) + 1;
    try {
      console.log('POST request on /media');
      const newMedia = await db.all_media.create({
        media_id: currentId,
        media_title: req.body.media_title,
        media_type: req.body.media_type,
        media_release_year: req.body.media_release_year,
        media_description: req.body.media_description,
        media_duration: req.body.media_duration,
        album_songs_number: req.body.album_songs_number,
        television_seasons_number: req.body.television_seasons_number,
        audience_rating: req.body.audience_rating,
        show_still_airing: req.body.show_still_airing
      });
      res.json(newMedia);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('PUT request on /media');
      await db.Media.update(
        {
          media_title: req.body.media_title,
          media_type: req.body.media_type,
          media_release_year: req.body.media_release_year,
          media_description: req.body.media_description,
          media_duration: req.body.media_duration,
          album_songs_number: req.body.album_songs_number,
          television_seasons_number: req.body.television_seasons_number,
          audience_rating: req.body.audience_rating,
          show_still_airing: req.body.show_still_airing
        },
        {
          where: {
            media_id: req.body.media_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete((req, res) => {
    try {
      console.log('DELETE request on /media');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

/// /////////////////////////////////
/// ////Creators Endpoints////////
/// /////////////////////////////////

router
  .route('/creators')
  .get(async (req, res) => {
    try {
      console.log('GET request on /creators');
      const creators = await db.Creators.findAll();
      const reply = creators.length > 0
        ? { data: creators }
        : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const creators = await db.Creators.findAll();
    const currentId = (await creators.length) + 1;
    try {
      console.log('POST request on /creators');
      const newCreator = await db.Creators.create({
        creator_id: currentId,
        creator_first_name: req.body.creator_first_name,
        creator_last_name: req.body.creator_last_name,
        creator_current_state: req.body.creator_current_state,
        creator_home_state: req.body.creator_home_state,
        creator_country: req.body.creator_country
      });
      res.json(newCreator);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('PUT request on /creators');
      await db.Creators.update(
        {
          creator_first_name: req.body.creator_first_name,
          creator_last_name: req.body.creator_last_name,
          creator_current_state: req.body.creator_current_state,
          creator_home_state: req.body.creator_home_state,
          creator_country: req.body.creator_country
        },
        {
          where: {
            creator_id: req.body.creator_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  });

/// /////////////////////////////////
/// //// Backgrounds Endpoints////////
/// /////////////////////////////////

router
  .route('/backgrounds')
  .get(async (req, res) => {
    try {
      console.log('GET request on /backgrounds');
      const backgrounds = await db.Backgrounds.findAll();
      const reply = backgrounds.length > 0
        ? { data: backgrounds }
        : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const backgrounds = await db.Backgrounds.findAll();
    const currentId = (await backgrounds.length) + 1;
    try {
      console.log('POST request on /backgrounds');
      const newBackground = await db.Backgrounds.create({
        background_id: currentId,
        background: req.body.background
      });
      res.json(newBackground);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('PUT request on /backgrounds');
      await db.Backgrounds.update(
        {
          background: req.body.background
        },
        {
          where: {
            background_id: req.body.background_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  });

/// /////////////////////////////////
/// //// Genres Endpoints////////
/// /////////////////////////////////

router
  .route('/genres')
  .get(async (req, res) => {
    try {
      console.log('GET request on /genres');
      const genres = await db.Genres.findAll();
      const reply = genres.length > 0 ? { data: genres } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const genres = await db.Genres.findAll();
    const currentId = (await genres.length) + 1;
    try {
      console.log('POST request on /genres');
      const newGenre = await db.Genres.create({
        genre_id: currentId,
        genre: req.body.genre
      });
      res.json(newGenre);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('PUT request on /genres');
      await db.Genres.update(
        {
          genre: req.body.genre
        },
        {
          where: {
            genre_id: req.body.genre_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  });

/// /////////////////////////////////
/// //// Roles Endpoints////////
/// /////////////////////////////////

router
  .route('/roles')
  .get(async (req, res) => {
    try {
      console.log('GET request on /roles');
      const roles = await db.Roles.findAll();
      const reply = roles.length > 0 ? { data: roles } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const roles = await db.Roles.findAll();
    const currentId = (await roles.length) + 1;
    try {
      console.log('POST request on /roles');
      const newRole = await db.roles.create({
        role_id: currentId,
        role_description: req.body.role_description
      });
      res.json(newRole);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('PUT request on /roles');
      await db.Roles.update(
        {
          role_description: req.body.role_description
        },
        {
          where: {
            role_id: req.body.role_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  });

/// /////////////////////////////////
/// //// Themes Endpoints////////
/// /////////////////////////////////

router
  .route('/themes')
  .get(async (req, res) => {
    try {
      console.log('GET request on /themes');
      const themes = await db.Themes.findAll();
      const reply = themes.length > 0 ? { data: themes } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const themes = await db.Themes.findAll();
    const currentId = (await themes.length) + 1;
    try {
      console.log('POST request on /themes');
      const newTheme = await db.Themes.create({
        theme_id: currentId,
        theme: req.body.theme
      });
      res.json(newTheme);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('PUT request on /themes');
      await db.Themes.update(
        {
          theme: req.body.theme
        },
        {
          where: {
            theme_id: req.body.theme_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  });

/// /////////////////////////////////
/// //// all_media_backgrounds_link Endpoints////////
/// /////////////////////////////////

router.route('/mediaBackgroundLinks').get(async (req, res) => {
  try {
    console.log('GET request on /mediaBackgroundLinks');
    const links = await db.MediaBackgroundLinks.findAll();
    const reply = links.length > 0 ? { data: links } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// //// all_media_creators_link Endpoints////////
/// /////////////////////////////////

router.route('/mediaCreatorLinks').get(async (req, res) => {
  try {
    console.log('GET request on /mediaCreatorLinks');
    const links = await db.MediaCreatorLinks.findAll();
    const reply = links.length > 0 ? { data: links } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// //// all_media_genres_link Endpoints////////
/// /////////////////////////////////

router.route('/mediaGenreLinks').get(async (req, res) => {
  try {
    console.log('GET request on /mediaGenreLinks');
    const links = await db.MediaGenreLinks.findAll();
    const reply = links.length > 0 ? { data: links } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// //// all_media_themes_link Endpoints////////
/// /////////////////////////////////

router.route('/mediaThemeLinks').get(async (req, res) => {
  try {
    console.log('GET request on /mediaThemeLinks');
    const links = await db.MediaThemeLinks.findAll();
    const reply = links.length > 0 ? { data: links } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// //// creator_roles_link Endpoints////////
/// /////////////////////////////////

router.route('/creatorRoleLinks').get(async (req, res) => {
  try {
    console.log('GET request on /creatorRoleLinks');
    const links = await db.CreatorRoleLinks.findAll();
    const reply = links.length > 0 ? { data: links } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
