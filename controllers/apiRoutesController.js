import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const nbaPlayerQuery = 'SELECT * FROM AWARDS';
router.route('/nba-players')
  .get(async (req, res) => {
    try {
      const result = await db.NBA.query(nbaPlayerQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched /nba-players with GET');
      res.json(result);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })

  .post(async (req, res) => {
    const players = await db.NBA.findAll();
    const currentId = (await players.length) + 1;
    try {
      const newPlayer = await db.NBA.create({
        player_id: currentId,
        player_name: req.body.player_name,
        position_id: req.body.position_id,
        ppg: req.body.ppg,
        assists: req.body.assists,
        team_id: req.body.team_id,
        player_number: req.body.player_number
      });
      res.json(newPlayer);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete(async (req, res) => {
    try {
      await db.NBA.destroy({
        where: {
          player_id: req.params.player_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.log(error);
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.DiningHall.update(
        {
          ppg: req.body.ppg,
          assists: req.body.assists,
          team_id: req.body.team_id
        },
        {
          where: {
            player_id: req.body.player_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something wend wrong on the server' });
    }
  });

export default router;