import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const descriptionQuery = 'SELECT * FROM descriptions'
const router = express.Router();

router.route('/description').get(async (req, res) => {
    try {
    const description = await db.sequelizeDB.query(descriptionQuery, {
        type: sequelize.QueryTypes.SELECT
        });
        res.json(description);
    } catch (err) {
        console.error(err);
        res.json({message: 'Server error'});
    }
});


router.get('/:description_id', async (req, res) => {
    // eslint-disable-next-line no-template-curly-in-string
    const descriptionIDQuery = `SELECT * FROM descriptions WHERE description_id = ${req.params.description_id}`;
    try {
      const description = await db.sequelizeDB.query(descriptionIDQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(description);
    } catch (err) {
      console.error(err);
      res.json({message: 'Server error'});
    }
  });  
router.post('/descriptionpost', async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(`INSERT INTO descriptions (description_id, parking, takeout, delivery)
        values(${req.body.description_id}, ${req.body.parking}, ${req.body.takeout},
        ${req.body.delivery})`
      );
      res.send('Something was added.');
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request.'})
    }
});     
 
router.put('/descriptionput', async (req, res) => {
    try {
      const put = await db.sequelizeDB.query(`UPDATE descriptions SET parking = ${req.body.parking}, 
      takeout = ${req.body.takeout}, delivery = ${req.body.delivery} WHERE description_id = ${req.body.description_id}`
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.send('Unsuccessful');
    }
});

router.delete('/descriptiondelete/:description_id', async (req, res) => {
    const {description_id } = req.params
    console.log(description_id);
    const descriptionIDQuery = `DELETE FROM descriptions WHERE description_id = ${description_id}`;
    try {
      const description = await db.sequelizeDB.query(descriptionIDQuery, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send('Deleted Successfully');
    } catch (err) {
      console.error(err);
      res.json({message: 'Server error'});
    }
});

export default router;