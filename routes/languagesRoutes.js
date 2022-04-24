import express from 'express';
import db from '../database/initializeDB.js';
import Languages from '../models/Languages.js';
import sequelize from 'sequelize';

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
  })

  .post(async (req, res) => {
    // try {
    //   const languageId = req.body.Languages || 0;
    //   const result = await db.sequelizeDB.query(Languages, {
    //     replacements: { language_id: languageId},
    //     type: sequelize.QueryTypes.SELECT
    //   });
    //   res.json({data: result});
    // } catch (err) {
    //   console.log(err);
    //   res.send({message: err});
    // }
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