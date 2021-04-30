/* eslint-disable no-console */
const express = require('express');
const sequelize = require('sequelize');

const db = require('../database/initializeDB.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Movie Museum!');
});

/// /////////////////////////////////
/// ////Actor Has Movies Endpoints////////
/// /////////////////////////////////
router.get('/actor_has_movies', async (req, res) => {
  try {
    const  actorHasMovies = await db.actor_has_movies.findAll();
    const reply = actorHasMovies.length > 0 ? { data: actorHasMovies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/actor_has_movies/:actor_id', async (req, res) => {
  try {
    const actorHasMovies = await db.actor_has_movies.findAll({
      where: {
        actor_id: req.params.actor_id
      }
    });

    res.json(actorHasMovies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/actor_has_movies', async (req, res) => {
  const actorHasMovies = await db.actor_has_movies.findAll();
  const currentId = (await actorHasMovies.length) + 1;
  try {
    const newActorhasmovies = await db.actor_has_movies.create({
      actor_id: currentId,
      movie_id: req.body.movie_id,
    });
    res.json(newActorhasmovies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/actor_has_movies/:', async (req, res) => {
  try {
    await db.actor_has_movies.destroy({
      where: {
        actor_id: req.params.actor_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/actor_has_movies', async (req, res) => {
  try {
    await db.actor_has_movies.update(
      {
        movie_id: req.body.movie_id,
      },
      {
        where: {
          actor_id: req.body.actor_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Actor Endpoints//////////
/// /////////////////////////////////
router.get('/actor', async (req, res) => {
  try {
    const actors = await db.actor.findAll();
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/actor/:actor_id', async (req, res) => {
  try {
    const actors = await db.actor.findAll({
      where: {
        actor_id: req.params.actor_id
      }
    });
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/actor', async (req, res) => {
  try {
    await db.actor.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender
      },
      {
        where: {
          actor_id: req.body.actor_id
        }
      }
    );
    res.send('Actor Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Earnings Endpoints/////////
/// /////////////////////////////////
router.get('/earnings', async (req, res) => {
  try {
    const earning = await db.earnings.findAll();
    res.send(earning);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/earnings/:movie_id', async (req, res) => {
  try {
    const earning = await db.earnings.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(earning);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/earnings', async (req, res) => {
  try {
    await db.earnings.update(
      {
        earnings_gross: req.body.earnings_gross,
        budget: req.body.budget
      },
      {
        where: {
          movie_id: req.body.movie_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Genre Endpoints///
/// /////////////////////////////////
router.get('/genre', async (req, res) => {
  try {
    const genres = await db.genre.findAll();
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genre/:genre_id', async (req, res) => {
  try {
    const genres = await db.genre.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////movie_has_genre Endpoints//////////
/// /////////////////////////////////
router.get('/movie_has_genre', async (req, res) => {
  try {
    const movie_has_genres = await db.movie_has_genre.findAll();
    res.json(movie_has_genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_has_genre/:movie_id', async (req, res) => {
  try {
    const movie_has_genres = await db.movie_has_genre.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movie_has_genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_has_genre', async (req, res) => {
  try {
    await db.movie_has_genre.update(
      {
        genre_id: req.body.genre_id,
      },
      {
        where: {
          movie_id: req.body.movie_id
        }
      }
    );
    res.send('movie_has_genre Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////movies Endpoints/////////
/// /////////////////////////////////
router.get('/movies', async (req, res) => {
  try {
    const movie = await db.movies.findAll();
    res.send(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movies/:movie_id', async (req, res) => {
  try {
    const movie = await db.movies.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movies', async (req, res) => {
  try {
    await db.movies.update(
      {
        duration: req.body.duration,
        title: req.body.title,
        year: req.body.year,
        country: req.body.country,
        imdb_score: req.body.imdb_score,
        earnings_gross: req.body.earnings_gross,
        studio_id: req.body.studio_id
      },
      {
        where: {
          movie_id: req.body.movie_id
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
const movies_genre_custom = `SELECT 
title,
genre_type
FROM movies
JOIN movies_has_genre
ON movies.movie_id = movies_has_genre.movie_id
JOIN genre
ON movies_has_genre.genre_id = genre.genre_id;
`;
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(movies_genre_custom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const actor_movie_earnings_custom = `SELECT actor_id,
first_name,
last_name,
gender,
duration,
title,
year,
country,
imdb_score,
earnings.earnings_gross,
budget
FROM 
actor 
JOIN actor_has_movies
ON actor.actor_id = actor_has_movies.actor_id
JOIN movies
ON movies.movie_id=actor_has_movies.movie_id
JOIN earnings
ON earnings.movie_id=movies.movie_id;
`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(actor_movie_earnings_custom, {
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

module.exports = router;
