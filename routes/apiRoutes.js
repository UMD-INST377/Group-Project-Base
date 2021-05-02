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
  console.log(123);
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
/// ////////movie_actors Endpoints//////////
/// /////////////////////////////////
router.get('/movie_actors', async (req, res) => {
  try {
    const movieActors = await db.movie_actors.findAll();
    res.json(movieActors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_actors/:movie_id', async (req, res) => {
  try {
    const actorsMovieId = await db.movie_actors.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(actorsMovieId);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_actors', async (req, res) => {
  try {
    await db.movie_actors.update(
      {
        actor_1_name: req.body.actor_1_name,
        actor_2_name: req.body.actor_2_name,
        actor_3_name: req.body.actor_3_name
      },
      {
        where: {
          movie_id: req.body.actor_id
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
/// ////////movie_content Endpoints/////////
/// /////////////////////////////////
router.get('/movie_content', async (req, res) => {
  try {
    const movieContent = await db.movie_content.findAll();
    res.send(movieContent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_content/:movie_id', async (req, res) => {
  try {
    const movieContent = await db.movie_content.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movieContent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_content', async (req, res) => {
  try {
    await db.movie_content.update(
      {
        genres: req.body.genres,
        plot_keywords: req.body.plot_keywords,
        content_rating: req.body.content_rating,
        language: req.body.language
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
/// ////////movie_financials Endpoints/////////
/// /////////////////////////////////
router.get('/movie_financials', async (req, res) => {
  try {
    const movieFinancials = await db.movie_financials.findAll();
    res.send(movieFinancials);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_financials/:movie_id', async (req, res) => {
  try {
    const movieFinancials = await db.movie_financials.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movieFinancials);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_financials', async (req, res) => {
  try {
    await db.movie_financials.update(
      {
        gross: req.body.gross,
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
/// ////////movie_imdb_ratings Endpoints/////////
/// /////////////////////////////////
router.get('/movie_imdb_ratings', async (req, res) => {
  try {
    const movie_imdb_ratings = await db.movie_imdb_ratings.findAll();
    res.send(movie_imdb_ratings);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_imdb_ratings/:movie_id', async (req, res) => {
  try {
    const movie_imdb_ratings = await db.movie_imdb_ratings.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movie_imdb_ratings);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_imdb_ratings', async (req, res) => {
  try {
    await db.movie_imdb_ratings.update(
      {
        imdb_score: req.body.imdb_score,
        num_critic_for_reviews: req.body.num_critic_for_reviews,
        num_user_for_reviews: req.body.num_user_for_reviews,
        num_voted_users: req.body.num_voted_users
        
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
/// ////////movie_technicals Endpoints/////////
/// /////////////////////////////////
router.get('/movie_technicals', async (req, res) => {
  try {
    const movieTechnicals = await db.movie_technicals.findAll();
    res.send(movie_technicals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_technicals/:movie_id', async (req, res) => {
  try {
    const movieTechnicals = await db.movie_technicals.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movieTechnicals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_technicals', async (req, res) => {
  try {
    await db.movies_technicals.update(
      {
        color: req.body.color,
        duration: req.body.duration,
        aspect_ratio: req.body.aspect_ratio,
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
/// ////////movie Endpoints/////////
/// /////////////////////////////////
router.get('/movie', async (req, res) => {
  try {
    const movies = await db.movie.findAll();
    res.send(movies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie/:movie_id', async (req, res) => {
  try {
    const moviesMovirId = await db.movie.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(moviesMovirId);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie', async (req, res) => {
  try {
    await db.movies.update(
      {
        movie_title: req.body.title,
        title_year: req.body.year,
        country: req.body.country,
        director_name: req.body.director_name
        
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
