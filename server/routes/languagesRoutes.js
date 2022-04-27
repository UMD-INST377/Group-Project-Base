import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import Languages from '../models/Languages.js';

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
router.route('/').post(async (req, res) => {
  const languageId = await db.Languages.findAll();
  const current = (await languageId.length) + 1;
  try {
    const newLanguage = await db.Languages.create({
      language_id: current,
      language: req.body.language,
      description: req.body.description

    });
    res.send('languages added');
  } catch (err) {
    console.log(err);
    console.log(current);
    res.send(err);
  }
});

router.route('/').put(async (req, res) => {
  try {
    await db.Languages.update(
      {
        language: req.body.genre,
        description: req.body.description
      },
      {
        where: {
          language_id: req.body.language_id
        }
      }
    );
    res.send('Language Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Language not found');
  }
});

router.route('/:language_id').delete(async (req, res) => {
  try {
    await db.Languages.destroy({
      where: {
        language_id: req.params.language_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

export default router;