/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import player from '../controllers/apiRoutesController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the NBA API');
});

/// //////////////////////////////////
/// ///////NBA Database////////
/// /////////////////////////////////
const nbaPlayerQuery = `SELECT player_name, position_name, ppg, assists, name
                        FROM Positions JOIN players
                          USING(position_id) JOIN Team
                          USING(team_id);`;

router.route('/nba-players')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(player.getPlayer, {
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
    const players = await db.sequelizeDB.findAll();
    const currentId = (await players.length) + 1;
    try {
      const newPlayer = await db.sequelizeDB.query(player.postPlayer, {
        type: sequelize.QueryTypes.INSERT
      });
      res.json(newPlayer);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete(async (req, res) => {
    try {
      await db.sequelizeDB.destroy({
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
      await db.sequelizeDB.update(
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
