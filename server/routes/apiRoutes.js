/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import path from 'path';
import db from '../../database/initializeDB.js';

const __dirname = path.resolve();

const router = express.Router();

/// //////////////////////////////////
/// ///////Tyler Farmer - Albums Endpoints////////
/// /////////////////////////////////
router.route('/albums')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT * from albums;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const albumId = req.body.album_id;
      const albumName = req.body.album_name;
      const sqlStatement = `UPDATE albums SET album_name = '${albumName}' WHERE album_id = ${albumId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      const albumId = req.body.album_id;
      const albumName = req.body.album_name;
      const sqlStatement = `UPDATE albums SET album_name = '${albumName}' WHERE album_id = ${albumId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const albumId = req.body.album_id;
      const sqlStatement = `DELETE from albums WHERE album_id = ${albumId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('deleted album');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// Tyler Farmer - Lab 11 - Top 50 US Chart ///
router.route('/USchart')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT songs.song_name FROM us_top50 INNER JOIN songs ON us_top50.song_id=songs.song_id;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put((req, res) => {
    try {
      console.log('touched /USchart route with PUT');
      res.json({message: 'PUT USchart endpoint'});
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post((req, res) => {
    try {
      console.log('touched /USchart route with POST');
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('touched /USchart route with DELETE');
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });

/// Global Top 50 Endpoint ///
router.route('/globalCharts')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT songs.song_name FROM global_top50 INNER JOIN songs ON global_top50.song_id=songs.song_id;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const sqlStatement = `DELETE from song WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('Deleted song.');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// Podcast Chart Endpoint ///
router.route('/podcastCharts')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT podcast_name, host, company FROM podcasts_charts';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const podcastId = req.body.podcast_id;
      const podcastName = req.body.podcast_name;
      const sqlStatement = `UPDATE podcasts SET podcast_name = '${podcastName}' WHERE podcast_id = ${podcastId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      const podcastId = req.body.podcast_id;
      const podcastName = req.body.podcast_name;
      const sqlStatement = `UPDATE podcasts SET podcast_name = '${podcastName}' WHERE podcast_id = ${podcastId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const podcastId = req.body.album_id;
      const sqlStatement = `DELETE from podcasts WHERE podcast_id = ${podcastId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('Deleted podcast.');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// Pop Songs Endpoint ///
router.route('/popSongs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT artist_name, song_name, album_name, genre FROM artist JOIN songs ON artist.artist_id = songs.artist_id JOIN albums ON songs.album_id = albums.album_id WHERE genre = "Pop" ORDER BY artist_name;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const artist = req.body.song_artist;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE get_pop_songs SET Song = '${songName}' WHERE Artist = '${artist}';`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      const artist = req.body.song_artist;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE get_pop_songs SET Song = '${songName}' WHERE Artist = ${artist};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.album_id;
      const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('Deleted song.');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// Hip-Hop/Rap Endpoint ///
router.route('/rapSongs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT song_id, artist_name, song_name, album_name, genre FROM artist JOIN songs ON artist.artist_id = songs.artist_id JOIN albums ON songs.album_id = albums.album_id WHERE genre = "Hip-Hop/Rap" ORDER BY artist_name;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log(result);
    } catch (err) {
      res.json(err);
    }
  });
router.delete('/rapSongs/:id', async (req, res) => {
  try {
    // add id for endpoint
    const songId = req.params.id;
    const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
    await db.sequelizeDB.query('SET FOREIGN_KEY_CHECKS = 0', null);
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    const options = {root: path.join(__dirname, '/public')};
    console.log(options);
    res.sendFile('hiphop.html', options);
  } catch (err) {
    res.json(err);
  }
});
/// Holiday songs endpoint ///
router.route('/holidaySongs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT artist_name, song_name, album_name, genre FROM artist JOIN songs ON artist.artist_id = songs.artist_id JOIN albums ON songs.album_id = albums.album_id WHERE genre = "Holiday" ORDER BY artist_name;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE albums SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE albums SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  });

/// Ariana Grande's Songs Endpoint ///
router.route('/arianaSongs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT song_name, artist_name, album_name, genre FROM artist JOIN songs ON artist.artist_id = songs.artist_id JOIN albums ON songs.album_id = albums.album_id WHERE artist.artist_id = 3 ORDER BY song_name;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('deleted song');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });
router.delete('/arianaSongs/:id', async (req, res) => {
  try {
    // add id for endpoint
    const songId = req.params.id;
    const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
    await db.sequelizeDB.query('SET FOREIGN_KEY_CHECKS = 0', null);
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    const options = {root: path.join(__dirname, '/public')};
    console.log(options);
    res.sendFile('ariana_grande.html', options);
  } catch (err) {
    res.json(err);
  }
});

/// Bad Bunny Songs Endpoint ///
router.route('/badBunnySongs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT song_name, artist_name, album_name, genre FROM artist JOIN songs ON artist.artist_id = songs.artist_id JOIN albums ON songs.album_id = albums.album_id WHERE artist.artist_id = 4 ORDER BY song_name;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
    // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
    // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
    // add id for endpoint
      const songId = req.body.song_id;
      const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('deleted song');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });
router.delete('/badBunnySongs/:id', async (req, res) => {
  try {
    // add id for endpoint
    const songId = req.params.id;
    const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
    await db.sequelizeDB.query('SET FOREIGN_KEY_CHECKS = 0', null);
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    const options = {root: path.join(__dirname, '/public')};
    console.log(options);
    res.sendFile('bad_bunny.html', options);
  } catch (err) {
    res.json(err);
  }
});

/// BTS Endpoint ///
router.route('/btsSongs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT song_name, artist_name, album_name, genre FROM artist JOIN songs ON artist.artist_id = songs.artist_id JOIN albums ON songs.album_id = albums.album_id WHERE artist.artist_id = 9 ORDER BY song_name;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
    // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
    // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
    // add id for endpoint
      const songId = req.body.song_id;
      const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('deleted song');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });
router.delete('/btsSongs/:id', async (req, res) => {
  try {
    // add id for endpoint
    const songId = req.params.id;
    const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
    await db.sequelizeDB.query('SET FOREIGN_KEY_CHECKS = 0', null);
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    const options = {root: path.join(__dirname, '/public')};
    console.log(options);
    res.sendFile('bts.html', options);
  } catch (err) {
    res.json(err);
  }
});

/// Lab 11: Lucas Ng Front Endpoint///
/* router.route('/songslist')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT albums.album_name FROM songs 
        INNER JOIN albums ON songs.album_id=albums.album_id;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('You touched /songslist route with GET!');
      res.json(result);
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .put((req, res) => {
    try {
      console.log('You touched /songslist route with PUT!');
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .post((req, res) => {
    try {
      console.log('You touched /songslist route with POST!');
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('You touched /songslist route with DELETE!');
      res.json({message: 'DELETE songslist endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  }); */

/// ////Lucas Ng Sample Endpoint/////
/// /////////////////////////////////
router.route('/songs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT * from songs;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // eslint-disable-next-line quotes
      const sqlStatement = `INSERT INTO songs (song_name, explicit) VALUES ('${req.body.song}', '${req.body.explicit}');`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.INSERT
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({error: err});
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('deleted song');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// //////////////////////////////////
/// ///////Nelson Mendez - Endpoints////////
/// /////////////////////////////////
/// /////////////////////////////////
/// //// Endpoints////////
/// /////////////////////////////////

router.get('/playlist/:playlist_id', async (req, res) => {
  try {
    const playlistId = req.params.playlist_id;
    const sqlStatement = `SELECT * from playlists WHERE playlist_id = ${playlistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get('/playlists', async (req, res) => {
  try {
    const sqlStatement = 'SELECT * from playlists;';
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.put('/playlist/:playlist_id/:playlist_name', async (req, res) => {
  try {
    // add id for endpoint
    const playlistId = req.params.playlist_id;
    const playlistName = req.params.playlist_name;
    const sqlStatement = `UPDATE playlists SET playlist_name = '${playlistName}' WHERE playlist_id = ${playlistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.UPDATE
    });
    res.json(result);
  } catch (err) {
    res.json({error: 'Server error, try again!'});
  }
});

router.post('/playlist', async (req, res) => {
  try {
    // eslint-disable-next-line quotes
    const sqlStatement = `INSERT INTO playlists (playlist_name) VALUES ('${req.body.playlist}');`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.INSERT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json({error: err});
  }
});

router.delete('/playlist/:playlist_id', async (req, res) => {
  try {
    // add id for endpoint
    const playlistId = req.params.playlist_id;
    const sqlStatement = `DELETE from playlists WHERE playlist_id = ${playlistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    console.log('deleted playlist');
    res.json(result);
  } catch (err) {
    res.json({error: 'Server error, try again!'});
  }
});

/// //////////////////////////Wyatts Endpoints /Artists Endpoints////////////////////////////
router.get('/artists/:artist_id', async (req, res) => {
  try {
    const artistId = req.params.artist_id;
    const sqlStatement = `SELECT * from artist WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get('/artists', async (req, res) => {
  try {
    const sqlStatement = 'SELECT * from artist;';
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.put('/artists/:artist_id/:artist_name', async (req, res) => {
  try {
    // add id for endpoint
    const artistId = req.params.artist_id;
    const artistName = req.params.artist_name;
    const sqlStatement = `UPDATE artist SET artist_name = '${artistName}' WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.UPDATE
    });
    res.json(result);
  } catch (err) {
    res.json({error: 'Server error, try again!'});
  }
});

router.post('/artists', async (req, res) => {
  try {
    // eslint-disable-next-line quotes
    const sqlStatement = `INSERT INTO artist (artist_name, verified) VALUES ('${req.body.artist}', '${req.body.verified}');`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.INSERT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json({error: err});
  }
});

router.delete('/artists/:artist_id', async (req, res) => {
  try {
    const artistId = req.params.artist_id;
    const sqlStatement = `DELETE from artist WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    console.log('deleted artist');
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/dining', async (req, res) => {
  try {
    await db.DiningHall.update(
      {
        hall_name: req.body.hall_name,
        hall_location: req.body.hall_location
      },
      {
        where: {
          hall_id: req.body.hall_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/meals', async (req, res) => {
  try {
    await db.Meals.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Meal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/macros', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Macros.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
        calories: req.body.calories,
        serving_size: req.body.serving_size,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////

const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
