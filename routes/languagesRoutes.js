import express from 'express';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const languages = await db.Languages.findAll();
      const reply = languages.length > 0 ? { data: languages } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      res.json('Server error');
    }
  });

router.route('/:language_id')
  .get(async (req, res) => {
    try {
      const languages = await db.Languages.findAll({
        where: {
          language_id: req.params.language_id
        }
      });
      res.json(languages);
    } catch (err) {
      res.json('Server error');
    }
  });

export default router;