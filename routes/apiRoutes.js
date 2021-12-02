import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import date from '../controllers/dateController.js';
import city from '../controllers/cityController.js';
import all from '../controllers/allController.js';

/* eslint-disable no-console */

const router = express.Router();

/* Date Endpoint */

router.get('/date', async(req,res) => {
  try {
    console.log('touched /date with GET');
    const result = await db.sequelizeDB.query(date.getDate, {
      type:sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
      console.log(error)
      res.send({message:"something went wrong"});
  }
})

router.put('/date', async (req, res) => {
    try {
      console.log('touched /date with PUT');
      const result = await db.sequelizeDB.query(date.putDate, {
        replacements: {
          id: req.body.id, 
          time: req.body.time,
          date: req.body.date
        },
        type: sequelize.QueryTypes.UPDATE,
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.send({message:"uhoh"});
    }
  })

router.post('/date', async (req, res) => {
    try {
      console.log('touched /date with POST');
      const result = await db.sequelizeDB.query(date.postDate, {
        replacements: {
          id: req.body.id,
          time: req.body.time,
          date: req.body.date
        },
        type: sequelize.QueryTypes.CREATE
      })
      res.json(result);
    } catch (err) {
        console.log(err);
        res.send({message:"uhoh"})
    }
  })

router.delete ('/date', async (req, res) => {
    try {
      console.log('touched /date with DELETE');
      const result = await db.sequelizeDB.query(date.deleteDate, {
        replacements: {
          id: req.body.id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
    } catch(err) {
        console.log(err);
        res.send({message:"uhoh"});
    }
  });

/* Cities Endpoint */

router.get('/cities', async(req,res) => {
  try {
    console.log('touched /city with GET');
    const result = await db.sequelizeDB.query(city.getCity, {
      type:sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
      console.log(error)
      res.send({message:"something went wrong"});
  }
})

router.put('/cities', async (req, res) => {
    try {
      console.log('touched /city with PUT');
      const result = await db.sequelizeDB.query(city.putCity, {
        replacements: {
          id: req.body.id, 
          city: req.body.city
        },
        type: sequelize.QueryTypes.UPDATE,
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.send({message:"uhoh"});
    }
  })

router.post('/cities', async (req, res) => {
    try {
      console.log('touched /date with POST');
      const result = await db.sequelizeDB.query(city.postCity, {
        replacements: {
          id: req.body.id,
          city: req.body.city
        },
        type: sequelize.QueryTypes.CREATE
      })
      res.json(result);
    } catch (err) {
        console.log(err);
        res.send({message:"uhoh"})
    }
  })

router.delete('/cities', async (req, res) => {
    try {
      console.log('touched /city with DELETE');
      const result = await db.sequelizeDB.query(city.deleteCity, {
        replacements: {
          id: req.body.id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
    } catch(err) {
        console.log(err);
        res.send({message:"uhoh"});
    }
  });

/* Magnitude end point goes here
*
*
*
*
*
*/

/*below fetches all earthquake data*/

  router.get('/', async (req, res) => {
    try {
    const result = await db.sequelizeDB.query(all.getAll, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
    } catch(err) {
      console.log(err);
      res.send({message:"uhoh"});
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(all.getByID, {
        replacements: {
          id: req.params.id
        },
        type:sequelize.QueryTypes.SELECT,
      });
      res.json(result)
    } catch(err) {
      console.log(err);
      res.send({message:"uhoh"});
    }
  })
  
  export default router;