import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router()

router.route('/vinylLabelRoutes')
  .post(async(req, res) => {
    try {
      const insertQuery = `INSERT INTO vinyllabel
            VALUES (${req.body.vinyl_id}, ${req.body.label_id});`
      const result = await db.sequelizeDB.query(insertQuery, {
        type: sequelize.QueryTypes.POST
      });
      console.log('touched vinyllabel with POST');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  })
  .put(async(req, res) => {
    try {
      const updateQuery = `UPDATE vinyllabel
                  SET vinyl_id= ${req.body.vinyl_id}, ${req.body.label_id}
                  `
      const result = await db.sequelizeDB.query(updateQuery, {type: sequelize.QueryTypes.PUT});
      console.log('touched vinyllabel with PUT');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  });

export default router