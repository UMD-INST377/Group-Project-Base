/* Group24 */
/* Jacob Walter Lab 9 & 10 */

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import controllers from '../controllers/routeControllers.js';

const router = express.Router();

//GET api
router.get('/', (req, res) => {
  console.log('Touched / with get');
  res.json('Success0');
});

// route GET presidents
router.get('/presidents', async (req, res) => {
  try {
    // message
    console.log('Touched /presidents with get');
    res.json('READ1');
  } catch (err) {
    console.error(err);
  }
});

// GET the specific president by id number

router.get('/presidents/:president_id', async (req, res) => {
  try {
    // Presidents table query and gets the specific id from the user
    const presidentInfoQuery = `SELECT concat(first_name, " ",last_name) as "President Name", birth_date as "Birth Date",
      home_state as "Home State", date_inaurg as "Date Inauguration",party as "Party", president_image as "President Image"
      FROM presidents_table
      WHERE president_id = ${req.params.president_id};`;
    console.log(presidentInfoQuery);
    // query type and sequelize
    const presidentInfo = await db.sequelizeDB.query(presidentInfoQuery, {
      type: sequelize.QueryTypes.SELECT,
    });
    // message on console
    console.log('Touched /presidents/:president_id with get');
    // json response when the specific id is entered
    res.json(presidentInfo);
  } catch (err) {
    // catch error if any
    console.error(err);
  }
});

// Get timeline of the presidents
router.get('/time_line', async (req, res) => {
  try {
    const pres = await db.sequelizeDB.query(controllers.timeLine, {
      type: sequelize.QueryTypes.SELECT,
    });

    // message on the console
    console.log('Touched /presidents/:president_id with get');
    // response in json from database
    res.json(pres);
  } catch (err) {
    console.error(err);
  }
});

// Delete the president by specific id
router.delete('/presidents/:president_id', async (req, res) => {
  try {
    const deletePresidentQuery = `DELETE from presidents_table
      where president_id = ${req.params.president_id};`;
    const delPresident = await db.sequelizeDB.query(deletePresidentQuery, {
      type: sequelize.QueryTypes.DELETE,
    });
    console.log('Touched /presidents/:president_id with Delete');
    res.json('Row Deleted');
  } catch (err) {
    console.error(err);
  }
});

// create new president when provide the information
router.post('/presidents', async (req, res) => {
  try {
    const createQuery = `INSERT INTO presidents_table(first_name, last_name, date_inaurg, age_inaurg, 
      terms_served, birth_date, death_date, home_state, 
      president_image, party)
      VALUES('${req.body.first_name}','${req.body.last_name}','${req.body.date_inaurg}','${req.body.age_inaurg}',
      '${req.body.terms_served}','${req.body.birth_date}','${req.body.death_date}','${req.body.home_state}',
      '${req.body.president_image}','${req.body.party}');`;
    const addNewPresident = await db.sequelizeDB.query(createQuery, {
      type: sequelize.QueryTypes.INSERT,
    });
    console.log('Touched /presidents with post/create');
    res.json(addNewPresident);
  } catch (err) {
    console.error(err);
  }
});
router.post('/firstlady', async (req, res) => {
  try {
    const createQueryLadies = `
      INSERT INTO Presidents.first_ladies(first_ladies_name)
      VALUES('${req.body.first_ladies_name}');`;
    const addNewLady = await db.sequelizeDB.query(createQueryLadies, {
      type: sequelize.QueryTypes.INSERT,
    });
    console.log('Touched /firstlady with post/create');
    res.json(addNewLady);
  } catch (err) {
    console.error(err);
  }
});
// INSERT INTO presidents_table(first_name, last_name, date_inaurg, age_inaurg, 
//   terms_served, birth_date, death_date, home_state, 
//   president_image, party)
//   VALUES('${req.body.first_name}','${req.body.last_name}','${req.body.date_inaurg}','${req.body.age_inaurg}',
//   '${req.body.terms_served}','${req.body.birth_date}','${req.body.death_date}','${req.body.home_state}',
//   '${req.body.president_image}','${req.body.party}');
//   INSERT INTO first_ladies(first_ladies_name)
//   VALUES('${req.body.first_ladies_name}');
// update the information of the existing presidents in the database by specific id
// if (ladiesQuery !== null)
// {
//   const addNewLady = await db.sequelizeDB.query(ladiesQuery, 
//     {
//       type: sequelize.QueryTypes.INSERT,
//     }); 
// } else {
//   console.log('no data for ladies')
// }
// res.json(addNewLady);
router.post('/vicepresident', async (req, res) => {
  try {
    const createQueryVp = `
      INSERT INTO Presidents.vice_presidents(first_name, last_name)
      VALUES('${req.body.first_name}','${req.body.last_name}');`;
    const addNewVp = await db.sequelizeDB.query(createQueryVp, {
      type: sequelize.QueryTypes.INSERT,
    });
    console.log('Touched /vicepresident with post/create');
    res.json(addNewVp);
  } catch (err) {
    console.error(err);
  }
});
router.post('/children', async (req, res) => {
  try {
    const createQueryChild = `
      INSERT INTO Presidents.children_of_presidents(first_name, last_name)
      VALUES('${req.body.first_name}','${req.body.last_name}');`;
    const addNewChild = await db.sequelizeDB.query(createQueryChild, {
      type: sequelize.QueryTypes.INSERT,
    });
    console.log('Touched /childrens with post/create');
    res.json(addNewChild);
  } catch (err) {
    console.error(err);
  }
});
router.put('/presidents/:president_id', async (req, res) => {
  try {
    const updateQuery = `UPDATE presidents_table SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}', 
    date_inaurg = '${req.body.date_inaurg}', age_inaurg = '${req.body.age_inaurg}', 
    terms_served = '${req.body.terms_served}',
    birth_date = '${req.body.birth_date}', death_date = '${req.body.death_date}', 
    home_state = '${req.body.home_state}',
    president_image = '${req.body.president_image}',  
    party = '${req.body.party}'
    WHERE president_id = ${req.params.president_id}`;
    const upPres = await db.sequelizeDB.query(updateQuery, {
      type: sequelize.QueryTypes.UPDATE,
    });
    console.log('Touched /presidents/:president_id with put/update');
    res.json(upPres);
  } catch (err) {
    console.error(err);
  }
});
router.put('/firstlady/:first_ladies_id', async (req, res) => {
  try {
    const updateQueryLady = `UPDATE first_ladies SET first_ladies_name = '${req.body.first_ladies_name}'
    WHERE first_ladies_id = ${req.params.first_ladies_id}`;
    const updateLady = await db.sequelizeDB.query(updateQueryLady, {
      type: sequelize.QueryTypes.UPDATE,
    });
    console.log('Touched /firstlady/:first_ladies_id with put/update');
    res.json(updateLady);
  } catch (err) {
    console.error(err);
  }
});
router.put('/vicepresident/:vp_id', async (req, res) => {
  try {
    const updateQueryVp = `UPDATE vice_presidents SET first_name = '${req.body.first_name}', 
    last_name = '${req.body.last_name}'
    WHERE vp_id = ${req.params.vp_id}`;
    const updateVp = await db.sequelizeDB.query(updateQueryVp, {
      type: sequelize.QueryTypes.UPDATE,
    });
    console.log('Touched /vicepresident/:vp_id with put/update');
    res.json(updateVp);
  } catch (err) {
    console.error(err);
  }
});
router.put('/children/:child_id', async (req, res) => {
  try {
    const updateQueryChild = `UPDATE children_of_presidents SET first_name = '${req.body.first_name}', 
    last_name = '${req.body.last_name}'
    WHERE child_id = ${req.params.child_id}`;
    const updateChild = await db.sequelizeDB.query(updateQueryChild, {
      type: sequelize.QueryTypes.UPDATE,
    });
    console.log('Touched /children/:child_id with put/update');
    res.json(updateChild);
  } catch (err) {
    console.error(err);
  }
});

export default router;