import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/people')
  .get(async (req, res) => {
    try {
      const people = await db.people.findAll();
      const reply = people.length > 0 ? { data: people} : { message: 'No results'};
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.send('Error in Server');
    }
  });
router.route('/people/:person_id').get(async(req, res) => {
  try {
    const people = await db.people.findAll({
      where: {
        person_id: req.params.person_id
      }
    });
    res.json(people);
  } catch (err) {
    console.error(err);
    res.send('Error in server');
  }
});
export default router;