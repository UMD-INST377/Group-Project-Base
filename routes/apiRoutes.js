/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the IMBD Movie Matcher!');
});

/// /////////////////////////////////
/// ////Movie Endpoints////////
/// /////////////////////////////////
router.route('/movies')
  .get(async (req, res) => {
    try {
      const movie = await db.movies.findAll();
      const reply = movie.length > 0 ? { data: movie } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    console.log("post request on movies", req.body);
    const movies1 = await db.movies.findAll();
    const currentId = (await movies1.length) + 1;
    let explicitValue = true;
    if (req.body.explicitInput) {
      explicitValue = true;
    } else {
      explicitValue = false;
    }
    try {
      const newMovie = await db.movies.create({
        movie_id: currentId,
        Title: req.body.Title,
        Year: req.body.Year,
        Durations: req.body.Durations,
        company_id: req.body.company_id,
        director_id: req.body.director_id,
        Rating_id: req.body.Rating_id,
        explicit: explicitValue
      });
      console.log(currentId, req.body.Title, explicitValue);
    } catch (err) {
      console.error(err);
      res.json('Post Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.movies.update(
        {
          Title: req.body.Title,
          explicit: req.body.explicitInput
        },
        {
          where: {
            movie_id: req.body.movie_id
          }
        }
      );
      console.log("put");
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete(async (req, res) => {
    try {
      await db.movies.destroy({
        where: {
          Title: req.body.Title,
          explicit: req.body.explicit
        }
      });
      console.log(req.body.Title);
      console.log(req.body.explicit);
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

/// /////////////////////////////////
/// ////////Actors Endpoints//////////
/// /////////////////////////////////
router.get('/actors', async (req, res) => {
  try {
    const actors = await db.Actors.findAll();
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.error('Server error at Actors GET');
  }
});

router.get('/actors/:actors_id', async (req, res) => {
  try {
    const actors = await db.Actors.findAll({
      where: {
        actors_id: req.params.actors_id
      }
    });
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.error('Server error at actors_id GET');
  }
});

router.put('/actors', async (req, res) => {
  try {
    await db.Actors.update(
      {
        actor_first_name: req.body.actor_first_name,
        actor_last_name: req.body.actor_last_name,
        actor_salary: req.body.actor_salary,
        director_id: req.body.director_id
      },
      {
        where: {
          actors_id: req.body.actors_id
        }
      }
    );
    res.send('Actors Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error at Actors PUT');
  }
});

router.delete('/actors/:actors_id', async (req, res) => {
  try {
    await db.Actors.destroy({
      where: {
        actors_id: req.params.actors_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at actors_id DELETE');
  }
});

/// /////////////////////////////////
/// ////////Genre Endpoints/////////
/// /////////////////////////////////
router.get('/genres', async (req, res) => {
  try {
    const genres = await db.Genre.findAll();
    res.send(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error at Genres GET');
  }
});

router.get('/genres/:genre_id', async (req, res) => {
  try {
    const genres = await db.Genre.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error at genre_id GET');
  }
});

router.put('/genres', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Genres.update(
      {
        genre_name: req.body.genre_name
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
    res.error('Server error at Genre PUT');
  }
});

router.delete('/genres/:genre_id', async (req, res) => {
  try {
    await db.Genres.destroy({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at genre_id DELETE');
  }
});

/// /////////////////////////////////
/// Director Endpoints///
/// /////////////////////////////////
router.get('/directors', async (req, res) => {
  try {
    const directors = await db.Director.findAll();
    res.json(directors);
  } catch (err) {
    console.error(err);
    res.error('Server error at Director GET');
  }
});

router.get('/directors/:directors_id', async (req, res) => {
  try {
    const directors = await db.Director.findAll({
      where: {
        director_id: req.params.director_id
      }
    });
    res.json(directors);
  } catch (err) {
    console.error(err);
    res.error('Server error at directors_id GET');
  }
});

router.put('/directors', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Director.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        director_salary: req.body.director_salary
      },
      {
        where: {
          director_id: req.body.director_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error at Directors PUT');
  }
});

router.delete('/directors/:director_id', async (req, res) => {
  try {
    await db.Director.destroy({
      where: {
        director_id: req.params.director_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at director DELETE');
  }
});

/// /////////////////////////////////
/// Production Company Endpoints///
/// /////////////////////////////////
router.get('/ProductionCompany', async (req, res) => {
  try {
    const company = await db.ProductionCompany.findAll();
    res.json(company);
  } catch (err) {
    console.error(err);
    res.error('Server error at company GET');
  }
});

router.get('/ProductionCompany/:company_id', async (req, res) => {
  try {
    const company = await db.ProductionCompany.findAll({
      where: {
        company_id: req.params.company_id
      }
    });
    res.json(company);
  } catch (err) {
    console.error(err);
    res.error('Server error at company_id GET');
  }
});

router.put('/ProductionCompany', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.ProductionCompany.update(
      {
        company_id: req.body.company_id,
        company_name: req.body.company_name
      },
      {
        where: {
          company_id: req.body.company_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error at company PUT');
  }
});

router.delete('/ProductionCompany/:company_id', async (req, res) => {
  try {
    await db.ProductionCompany.destroy({
      where: {
        company_id: req.params.company_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at company_id DELETE');
  }
});

/// /////////////////////////////////
/// Ratings Endpoints///
/// /////////////////////////////////
router.get('/Rating', async (req, res) => {
  try {
    const rating = await db.Rating.findAll();
    res.json(rating);
  } catch (err) {
    console.error(err);
    res.error('Server error at rating GET');
  }
});

router.get('/Rating/:rating_id', async (req, res) => {
  try {
    const rating = await db.Rating.findAll({
      where: {
        rating_id: req.params.rating_id
      }
    });
    res.json(rating);
  } catch (err) {
    console.error(err);
    res.error('Server error at rating_id GET');
  }
});

router.put('/Rating', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Rating.update(
      {
        rating_id: req.body.rating_id,
        rating_number: req.body.rating_number
      },
      {
        where: {
          rating_id: req.body.rating_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error at rating PUT');
  }
});

router.delete('/Rating/:rating_id', async (req, res) => {
  try {
    await db.Rating.destroy({
      where: {
        rating_id: req.params.rating_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at rating_id DELETE');
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
