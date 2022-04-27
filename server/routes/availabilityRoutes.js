import express from 'express';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => { // res, req, next
    try {
      const availability = await db.Availability.findAll();
      const reply = availability.length > 0 ? { data: availability } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      res.json('Server error');
    }
  });

router.route('/:availability_id')
  .get(async (req, res) => {
    try {
      const availability = await db.Availability.findAll({
        where: {
          availability_id: req.params.availability_id
        }
      });
      res.json(availability);
    } catch (err) {
      res.json('Server error');
    }
  });

export default router;