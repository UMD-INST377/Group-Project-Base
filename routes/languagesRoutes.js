import express from 'express';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const images = await db.Images.findAll();
      const reply = images.length > 0 ? { data: images } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      res.json('Server error');
    }
  });

router.route('/:language_id')
  .get(async (req, res) => {
    try {
      const languages = await db.Images.findAll({
        where: {
          language_id: req.params.image_id
        }
      });
      res.json(languages);
    } catch (err) {
      res.json('Server error');
    }
  });

export default router;