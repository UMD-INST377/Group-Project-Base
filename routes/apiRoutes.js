/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Spotify API!');
});

/// /////////////////////////////////
/// ////Artists Endpoints////////////
/// /////////////////////////////////

// Anna Kafrune

router.route('/artistsRoute').get(async (req, res) => {
  try {
    const arts = await db.Artists.findAll();
    const reply = arts.length > 0 ? { data: arts } : { message: 'no results found' };
    res.json({data: reply});
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
})

// router.route('/wholeArtistsRoute').get(async (req, res) => {
//   try {
//     const arts = await db.Artists.findAll({ include: db.Genres});
    
//     const genres = await db.Genres.findAll();
//     const wholeArtists = arts.map((art) => {
//       const genresEntry = genres.fing((genre) => genre.GENRE_ID === art.GENRE_ID);
//         console.log('art', art)
//         console.log('genresEntry', genresEntry);

//         return {
//           ...art.dataValues,
//           ...genresEntry.dataValues
//         };
//       });
//       res.json({data: wholeArtists});
//     } catch (err){
//       console.error(err);
//       res.json({message: 'Something went wrong with the server'});
//     }
//     });

router.get('/artists/:ARTIST_ID', async (req, res) => {
  try {
    const arts = await db.Artists.findAll({
      where: {
        ARTIST_ID: req.params.ARTIST_ID
      }
    });

    res.json(arts);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/artists', async (req, res) => {
  const arts = await db.Artists.findAll();
  const currentId = (await arts.length) + 1;
  try {
    const newArtist = await db.artists.create({
      ARTIST_ID: currentId,
      ARTIST_NAME: req.body.ARTIST_NAME,
      ARTIST_POPULARITY: req.body.ARTIST_POPULARITY,
      GENRE_ID: req.body.GENRE_ID,
    });
    res.json(newArtist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/artists/:ARTIST_ID', async (req, res) => {
  try {
    await db.Artists.destroy({
      where: {
        ARTIST_ID: req.params.ARTIST_ID
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/artists', async (req, res) => {
  try {
    await db.artists.update(
      {
        ARTIST_NAME: req.body.ARTIST_NAME,
        ARTIST_POPULARITY: req.body.ARTIST_POPULARITY
      },
      {
        where: {
          ARTIST_ID: req.body.ARTIST_ID
        }
      }
    );
    res.send('Artists Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

////////////////////////////////////
///////Albums Endpoints////
////////////////////////////////////

// Andrea Tavakol

router.route('/albumsRoute').get(async (req, res) => {
  try {
    const albums = await db.Albums.findAll();
    const reply = albums.length > 0 ? { data: albums } : { message: 'no results found' };
    res.json({data: reply});
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
})

router.get('/albums/:ALBUM_ID', async (req, res) => {
  try {
    const albums = await db.Albums.findAll({
      where: {
        ALBUM_ID: req.params.ALBUM_ID
      }
    });
    res.json(albums);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/albums', async (req, res) => {
  const albums = await db.Albums.findAll();
  const currentId = (await albums.length) + 1;
  try {
    const newAlbum = await db.albums.create({
      ALBUM_ID: currentId,
      ALBUM_NAME: req.body.ALBUM_NAME,
      ALBUM_POPULARITY: req.body.ALBUM_POPULARITY,
      GENRE_ID: req.body.GENRE_ID,
    });
    res.json(newAlbum);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/albums/:ALBUM_ID', async (req, res) => {
  try {
    await db.Albums.destroy({
      where: {
        ALBUM_ID: req.params.ALBUM_ID
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/albums', async (req, res) => {
  try {
    await db.albums.update(
      {
        ALBUM_NAME: req.body.ALBUM_NAME,
        ALBUM_POPULARITY: req.body.ALBUM_POPULARITY
      },
      {
        where: {
          ALBUM_ID: req.body.ALBUM_ID
        }
      }
    );
    res.send('Albums Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Genres Endpoints//////////
/// /////////////////////////////////

// Anna Kafrune

router.route('/wholeGenresRoute').get(async (req, res) => {
  try {
    const genres = await db.Genres.findAll();
    const arts = await db.Artists.findAll();
    const wholeGenres = genres.map((genre) => {
      const artsEntry = arts.fing((art) => art.GENRE_ID === genre.GENRE_ID);
        console.log('genre', genre)
        console.log('artsEntry', artsEntry);

        return {
          ...genre.dataValues,
          ...artsEntry.dataValues
        };
      });
      res.json({data: wholeGenres});
    } catch (err){
      console.error(err);
      res.json({message: 'Something went wrong with the server'});
    }
});

router.route('/wholeGenresRoute2').get(async (req, res) => {
  try {
    const genres = await db.Genres.findAll({ include: db.Artists });
    console.log(genres)
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/genresRoute').get(async (req, res) => {
  try {
    const genres = await db.Genres.findAll();
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genres/:GENRE_ID', async (req, res) => {
  try {
    const genres = await db.Genres.findAll({
      where: {
        GENRE_ID: req.params.GENRE_ID
      }
    });
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/genres', async (req, res) => {
  try {
    await db.Genres.update(
      {
        GENRE_NAME: req.body.GENRE_NAME,
        GENRE_POPULARITY: req.body.GENRE_POPULARITY
      },
      {
        where: {
          GENRE_ID: req.body.GENRE_ID
        }
      }
    );
    res.send('Genre Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

////////////////////////////////////
///////Characteristics Endpoints////
////////////////////////////////////

// Jared Caplan

router.route('/characteristicsRoute').get(async (req, res) => {
  try {
    const characteristics = await db.Characteristics.findAll();
    res.json(characteristics);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/characteristics/:CHARACTERISTICS_ID', async (req, res) => {
  try {
    const characteristics = await db.Characteristics.findAll({
      where: {
        CHARACTERISTICS_ID: req.params.CHARACTERISTICS_ID
      }
    });
    res.json(characteristics);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/characteristics', async (req, res) => {
  try {
    await db.Characteristics.update(
      {
        CHARACTERISTICS_NAME: req.body.CHARACTERISTICS_NAME,
        CHARACTERISTICS_DESCRIPTION: req.body.CHARACTERISTICS_DESCRIPTION
      },
      {
        where: {
          CHARACTERISTICS_ID: req.body.CHARACTERISTICS_ID
        }
      }
    );
    res.send('characteristics Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


/////////////////////////////////////////
//////// Song Characteristics ///////////
/////////////////////////////////////////
// Alex Ghelman

router.route('/song_characteristicsRoute').get(async (req, res) => {
  try {
    const song_characteristics = await db.Song_Characteristics.findAll();
    res.json(song_characteristics);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/song_characteristics/:SONG_CHARACTERISTICS_ID', async (req, res) => {
  try {
    const song_characteristics = await db.Song_Characteristics.findAll({
      where: {
        SONG_CHARACTERISTICS_ID: req.params.SONG_CHARACTERISTICS_ID
      }
    });
    res.json(song_characteristics);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/song_characteristics', async (req, res) => {
  try {
    await db.Song_Characteristics.update(
      {
        SONG_ID: req.body.SONG_ID,
        CHARACTERISTICS_ID: req.body.CHARACTERISTICS_ID,
        SONG_CHARACTERISTICS_VALUE: req.body.SONG_CHARACTERISTICS_VALUE
      },
      {
        where: {
          SONG_CHARACTERISTICS_ID: req.body.SONG_CHARACTERISTICS_ID
        }
      }
    );
    res.send('song_characteristics Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/////////////////////////////////////////
//////// Songs ///////////
/////////////////////////////////////////
// Delmar Randolph

router.route('/songsRoute').get(async (req, res) => {
  try {
    const arts = await db.Songs.findAll();
    const reply = arts.length > 0 ? { data: arts } : { message: 'no results found' };
    res.json({data: reply});
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
})

router.get('/songs/:SONG_ID', async (req, res) => {
  try {
    const song = await db.Songs.findAll({
      where: {
        SONG_ID: req.params.SONG_ID
      }
    });

    res.json(song);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/songs', async (req, res) => {
  const song = await db.Songs.findAll();
  const currentId = (await song.length) + 1;
  try {
    const newArtist = await db.songs.create({
      SONG_ID: currentId,
      SONG_NAME: req.body.SONG_NAME,
      SONG_POPULARITY: req.body.SONG_POPULARITY,
      GENRE_ID: req.body.GENRE_ID,
    });
    res.json(newSong);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/songs/:SONG_ID', async (req, res) => {
  try {
    await db.Songs.destroy({
      where: {
        SONG_ID: req.params.SONG_ID
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/songs', async (req, res) => {
  try {
    await db.songs.update(
      {
        SONG_NAME: req.body.SONG_NAME,
        SONG_POPULARITY: req.body.SONG_POPULARITY
      },
      {
        where: {
          SONG_ID: req.body.SONG_ID
        }
      }
    );
    res.send('Songs Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// /// /////////////////////////////////
// /// ////////Macros Endpoints/////////
// /// /////////////////////////////////
// router.get('/macros', async (req, res) => {
//   try {
//     const macros = await db.Macros.findAll();
//     res.send(macros);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// router.get('/macros/:meal_id', async (req, res) => {
//   try {
//     const meals = await db.Macros.findAll({
//       where: {
//         meal_id: req.params.meal_id
//       }
//     });
//     res.json(meals);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// router.put('/macros', async (req, res) => {
//   try {
//     // N.B. - this is a good example of where to use code validation to confirm objects
//     await db.Macros.update(
//       {
//         meal_name: req.body.meal_name,
//         meal_category: req.body.meal_category,
//         calories: req.body.calories,
//         serving_size: req.body.serving_size,
//         cholesterol: req.body.cholesterol,
//         sodium: req.body.sodium,
//         carbs: req.body.carbs,
//         protein: req.body.protein,
//         fat: req.body.fat
//       },
//       {
//         where: {
//           meal_id: req.body.meal_id
//         }
//       }
//     );
//     res.send('Successfully Updated');
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// /// /////////////////////////////////
// /// Dietary Restrictions Endpoints///
// /// /////////////////////////////////
// router.get('/restrictions', async (req, res) => {
//   try {
//     const restrictions = await db.DietaryRestrictions.findAll();
//     res.json(restrictions);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// router.get('/restrictions/:restriction_id', async (req, res) => {
//   try {
//     const restrictions = await db.DietaryRestrictions.findAll({
//       where: {
//         restriction_id: req.params.restriction_id
//       }
//     });
//     res.json(restrictions);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// /// //////////////////////////////////
// /// ///////Custom SQL Endpoint////////
// /// /////////////////////////////////
// const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
// router.get('/table/data', async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(macrosCustom, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// const mealMapCustom = `SELECT hall_name,
//   hall_address,
//   hall_lat,
//   hall_long,
//   meal_name
// FROM
//   Meals m
// INNER JOIN Meals_Locations ml 
//   ON m.meal_id = ml.meal_id
// INNER JOIN Dining_Hall d
// ON d.hall_id = ml.hall_id;`;
// router.get('/map/data', async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(mealMapCustom, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });
// router.get('/custom', async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(req.body.query, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

export default router;
