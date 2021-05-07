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
  const currentgenreId = (await genres.length) + 1;
  try {
    const newArtist = await db.Artists.create({
      ARTIST_ID: currentId,
      ARTIST_NAME: req.body.ARTIST_NAME,
      ARTIST_POPULARITY: req.body.ARTIST_POPULARITY,
      GENRE_ID: currentgenreId,
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

/// /////////////////////////////////
/// ////////Genres Endpoints//////////
/// /////////////////////////////////

// Anna Kafrune

router.route('/wholeGenresRoute').get(async (req, res) => {
  try {
      const wholeGenres = await db.Genres.findAll({include:db.Artists});
      console.log(wholeGenres)
      res.json({data: wholeGenres});
      
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong with the server'});
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

router.route('/wholeSong_characteristicsRoute').get(async (req, res) => {
  try {
      const wholeSong_characteristics = await db.Song_Characteristics.findAll({include:{model: db.Songs, model: db.Characteristics}});
      console.log(wholeSong_characteristics)
      res.json({data: wholeSong_characteristics});
      
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong with the server'});
    }
});

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
//////// Songs Endpoints///////////
/////////////////////////////////////////

router.route('/wholeSongsRoute').get(async (req, res) => {
  try {
      const wholeSongs = await db.Songs.findAll({include:db.Artists});
      console.log(wholeSongs)
      res.json({data: wholeSongs});
      
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong with the server'});
    }
});

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
  const currentartsId = (await arts.length) + 1; 
  try {
    const newSong = await db.Songs.create({
      SONG_ID: currentId,
      SONG_NAME: req.body.SONG_NAME,
      SONG_POPULARITY: req.body.SONG_POPULARITY,
      ARTIST_ID: currentartsId,
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

export default router;

