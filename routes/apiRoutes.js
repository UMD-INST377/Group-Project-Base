/* eslint-disable no-console */
const express = require('express');
const sequelize = require('sequelize');

const db = require('../database/initializeDB.js');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(11);
  res.send('Welcome to the Movie Museum!');
});

/// /////////////////////////////////
/// ////////movie_actors Endpoints//////////
/// /////////////////////////////////
router.get('/movie_actors', async (req, res) => {
  try {
    const movieActors = await db.movieActors.findAll();
    res.send(movieActors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_actors/:movie_id', async (req, res) => {
  try {
    const actorsMovieId = await db.movieActors.findAll({
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
    await db.movieActors.update(
      {
        movie_id: req.body.movie_id,
        actor_1_name: req.body.actor_1_name
      },
      {
        where: {
          movie_id: req.body.movie_id
        }
      }
    );
    res.send('Actor Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/movie_actors', async (req, res) => {
  try {
    const newMoviesActor = await db.movieActors.create({
      movie_id: req.body.movie_id,
      actor_1_name: req.body.actor_1_name
    });
    res.json(newMoviesActor);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/movie_actors/:movie_id', async (req, res) => {
  try {
    await db.movie.destroy({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.send('Successfully Deleted');
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
    const movieContent = await db.movieContent.findAll();
    res.send(movieContent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_content/:movie_id', async (req, res) => {
  try {
    const movieContentId = await db.movieContent.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movieContentId);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_content', async (req, res) => {
  try {
    await db.movieContent.update(
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

router.post('/movie_content', async (req, res) => {
  try {
    const newMoviesContent = await db.movieContent.create({
      movie_id: req.body.movie_id,
      genres: req.body.genres
    });
    res.json(newMoviesContent);
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
    const movieFinancial = await db.movieFinancials.findAll();
    res.send(movieFinancial);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_financials/:movie_id', async (req, res) => {
  try {
    const movieFinMovieId = await db.movieFinancials.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movieFinMovieId);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_financials', async (req, res) => {
  try {
    await db.movieFinancials.update(
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
    const movieImdbRatings = await db.movieImdbRatings.findAll();
    res.send(movieImdbRatings);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_imdb_ratings/:movie_id', async (req, res) => {
  try {
    const movieImdbRatings = await db.movieImdbRatings.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movieImdbRatings);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie_imdb_ratings', async (req, res) => {
  try {
    await db.movieImdbRatings.update(
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
    const movieTechnicals = await db.movieTechnicals.findAll();
    res.send(movieTechnicals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_technicals/:movie_id', async (req, res) => {
  try {
    const movieTechnicals = await db.movieTechnicals.findAll({
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
    await db.movieTechnicals.update(
      {
        color: req.body.color,
        duration: req.body.duration,
        aspect_ratio: req.body.aspect_ratio
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
    const moviesMovieId = await db.movie.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(moviesMovieId);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/movie', async (req, res) => {
  try {
    const newMovies = await db.movie.create({
      movie_id: req.body.movie_id,
      movie_title: req.body.movie_title,
      title_year: req.body.title_year,
      director_name: req.body.director_name
    });
    res.json(newMovies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/movie/:movie_id', async (req, res) => {
  try {
    await db.movie.destroy({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie', async (req, res) => {
  try {
    await db.movie.update(
      {
        movie_id: req.body.movie_id,
        movie_title: req.body.movie_title,
        title_year: req.body.title_year,
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
const moviesGnreCustom = `SELECT 
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
    const result = await db.sequelizeDB.query(moviesGnreCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const actorMovieEarningsCustom = `SELECT actor_id,
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
    const result = await db.sequelizeDB.query(actorMovieEarningsCustom, {
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
