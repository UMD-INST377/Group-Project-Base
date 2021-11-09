const teamsCustom = `SELECT team_id,
  team_name,
  conference,
  division,
  general_manager,
  coach,
  arena_id
FROM
  teams t
INNER JOIN players p 
  ON t.team_id = p.team_id
INNER JOIN arenas a 
  ON t.arena_id = p.arena_id
INNER JOIN games g
ON (t.team_id = g.home_team_id OR t.team_id = g.away_team_id);`;

import express from 'express';
import sequelize from 'sequelize';

const router = express.Router();

const teamsController = require('../public/controllers/teamsController.js');

exports.get = router.get('/teams', async (req, res) => {
    try {
      const result = await db.teams.query(teamsCustom, {
        type: sequelize.QueryTypes.SELECT,
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

exports.get = router.get('/teams', async (req, res) => {
    try {
      const team = await db.teams.findAll();
      res.json(teams);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

exports.get = router.get("/teams/:team_id", async (req, res) => {
    try {
        const team = await db.teams.findAll({
          where: {
            team_id: req.params.team_id,
          },
        });
    res.json(team);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

exports.post = router.post("/teams", async (req, res) => {
  const currentId = (await teams.length) + 1;
  try {
    const newTeam = await db.teams.create({
      team_id: currentId,
      team_name: req.body.team_name,
      conference: req.body.conference,
      division: req.body.division,
      general_manager: req.body.general_manager,
      coach: req.body.coach,
      arena_id: req.body.arena_id
    });
    res.json(newTeam);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

exports.delete = router.delete("/teams/:team_id", async (req, res) => {
  try {
    await db.teams.destroy({
      where: {
        team_id: req.params.team_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

exports.put = router.put("/teams", async (req, res) => {
    const currentId = (await teams.length) + 1;
    try {
      const newTeam = await db.teams.create({
        team_id: currentId,
        team_name: req.body.team_name,
        conference: req.body.conference,
        division: req.body.division,
        general_manager: req.body.general_manager,
        coach: req.body.coach,
        arena_id: req.body.arena_id
      });
      res.json(newTeam);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  });

export default router;