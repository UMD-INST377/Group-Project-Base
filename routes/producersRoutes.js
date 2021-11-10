import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getProducers from '../client/controllers/getProducers.js';

const router = express.Router();

router.route('/producers')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(getProducers, {type: sequelize.QueryTypes.SELECT});
      console.log('touched producers with GET');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  })
  .post(async(req, res) => {
    try {
      const insertQuery = `INSERT INTO producers(producer_id, producer_fn, producer_ln)
                           SELECT MAX(producer_id) + 1 , ${req.body.producer_fn}, ${req.body.producer_ln} FROM producers`;
      const result = await db.sequelizeDB.query(insertQuery, {type: sequelize.QueryTypes.POST});
      console.log('touched producers with POST');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  })
  .put(async(req, res) => {
    try {
      const updateQuery = `UPDATE producers
                           SET producer_id = ${req.body.producer_id}, producer_fn = ${req.body.producer_fn}, producer_ln = ${req.body.producer_ln}
                           WHERE producer_id = ${req.body.producer_id}`;
      const result = await db.sequelizeDB.query(updateQuery, {type: sequelize.QueryTypes.PUT});
      console.log('touched producers with PUT');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  })
  .delete(async(req, res) => {
    try {
      const deleteQuery = `DELETE FROM producers 
                           WHERE producer_id = ${req.body.producer_id};`;
      const result = await db.sequelizeDB.query(deleteQuery, {type: sequelize.QueryTypes.DELETE});
      console.log('touched producers with DELETE');
      res.json(result)
    } catch (err) {
      console.log(err);
    }
  });
export default router;