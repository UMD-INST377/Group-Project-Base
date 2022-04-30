/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import ChartJsImage from "chartjs-to-image";
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

// Created by Viphu Nguyen
// Access the actors table and receiving the actor's id
router.get('/actors/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const actorList = await db.Actor.findOne({
      where: {
        actor_id: `${id}`
      }
    });
    res.send({
      actorList
    });
  } catch (err) {
    console.error(err);
    console.log(err)
    res.send('Server error');
  }
});

// To delete a specific actors
router.delete('/delete_actors', async (req, res) => {
  try {
    const actorList = await db.Actor.destroy({
      where: {
        actor_id: req.body.actor_id
      }
    });
    res.send(
      'Sucessfully Deleted'
    );
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// Access the actors table and receiving the actor's first name
router.route('/actors')
  .get(async (req, res) => {
    try {
      const actorList = await db.Actor.findAll({
        order: [['fname', 'DESC']]
      });
      res.json({
        data: actorList
      });
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  })

// Access the actors table and create a dummy row in the actors table
  .post(async (req, res) => {
    const newActor = await db.Actor.create({
      fname: req.body.fname, 
      lname: req.body.lname,
      deathyear: req.body.deathyear !== "" ? req.body.deathyear : null, //conditional for null if no death year!!
      birthyear: req.body.birthyear,
    });
    res.send('dummyValue');
  });

// Chart on top 5 TV ratings
router.get('/chart', async (req, res) => {
  const movies = await db.sequelizeDB.query('select * from primary_title order by title_rating DESC limit 5'); // mySQL chart query coding
  const dataValues = []; // Y-axis for the chart
  const colNames = []; // X-axis for the chart
  // console.log('dummy', movies[0][0].primary_title);
  movies[0].forEach(((item) => {
    colNames.push(item.primary_title); // From mySQL name
    dataValues.push(item.title_rating); // From mySQL name
  }));
  const chart = new ChartJsImage();
  chart.setConfig({
    type: 'bar',
    data: {labels: colNames, datasets: [{label: 'Average Ratings', data: dataValues}]}
  });
  chart.toFile('./client/images/Chart.jpg'); // The image saving file name
  // console.log(dataValues, colNames);
  res.send('dummyValue');
});

// End of Viphu Nguyen's Contribution

// Gerson's contribution

router.get('/primary_title/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const titleList = await db.Title.findOne({
      where: {
        title_id: `${id}`
      }
    });
    res.send({
      titleList
    });
  } catch (err) {
    console.error(err);
    res.send('Server error Title get');
  }
});

// To delete a specific titles
// need to fix !! see actors for bug
router.delete('/delete_title', async (req, res) => {
  try {
    const actorList = await db.Title.destroy({
      where: {
        actor_id: req.body.title_id
      }
    });
    res.send(
      'Sucessfully Deleted'
    );
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// Access the titles table and receiving the title's name 
router.route('/primary_title')
  .get(async (req, res) => {
    try {
      const titleList = await db.Title.findAll({
        order: [['primary_title', 'DESC']]
      });
      res.json({
        data: titleList
      });
    } catch (err) {
      console.error(err);
      res.send('Server error Title route');
    }
  })

// Access the titles table and creates a dummy row in the titles table
  .post(async (req, res) => {
    const newTitle = await db.Title.create({
      primary_title: req.body.primary_title,
      title_type: req.body.title_type,
    });
    res.send('dummyValue');
  })

// end of Gerson pt 1

// Testing for IC#2 - Kevin
router.get('/crew/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const crewList = await db.Crew.findOne({
      where: {
        crew_id: `${id}`
      }
    });
    res.send({
      crewList
    });
  } catch (err) {
    console.error(err);
    res.send('Crew ID error');
  }
});

router.post('/delete_crew', async (req, res) => {
  try {
    const crewList = await db.Crew.destroy({
      where: {
        crew_id: req.body.crew_id
      }
    });
    res.send(
      'Crew Deleted'
    );
  } catch (err) {
    console.error(err);
    res.send('Delete crew error');
  }
});

router.route('/crew')
  .get(async (req, res) => {
    try {
      const crewList = await db.Crew.findAll({
        order: [['fname', 'DESC']]
      });
      res.json({
        data: crewList
      });
    } catch (err) {
      console.error(err);
      res.send('Crew error');
    }
  })

  .post(async (req, res) => {
    const newCrew = await db.Crew.create({
      fname: req.body.fname,
      lname: req.body.lname,
      deathyear: req.body.deathyear,
      birthyear: req.body.birthyear,
    });
    res.send('dummyValue');
  })
// End kevin testing

// Gerson pt 2
router.get('/episodes/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const episodeList = await db.episode_details.findOne({
      where: {
        episode_id: `${id}`
      }
    });
    res.send({
      episodeList
    });
  } catch (err) {
    console.error(err);
    res.send('Server error Episode get');
  }
});

// Access the actors table and receiving the actor's first name
router.route('/episodes')
  .get(async (req, res) => {
    try {
      const episodeList = await db.episode_details.findAll({
        order: [['episode_name', 'DESC']]
      });
      res.json({
        data: episodeList
      });
    } catch (err) {
      console.error(err);
      res.send('Server error episode route');
    }
  })

// Access the actors table and create a dummy row in the actors table
  .post(async (req, res) => {
    const newEpisode = await db.episode_details.create({
      episode_name: 'firstDummy', 
      season_number: 'secondDummy' 
    });
    res.send('dummyValue')
  })

// end of Gerson pt 2
// do not delete this!!!!
export default router;
// do not delete this!!!!