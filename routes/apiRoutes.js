/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the NBA Info Insiders!');
});

/// //////////////////////////
/// /// Platform Endpoints ///
/// //////////////////////////
router.get('/platform', async (req, res) => {
  try {
    const platforms = await db.Platform.findAll();
    const reply = platforms.length > 0 ? { data: platforms } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server Error at Platform GET');
  }
});

router.get('/platform/:platform_id', async (req, res) => {
  try {
    const platform = await db.Platform.findAll({
      where: {
        platform_id: req.params.platform_id
      }
    });

    res.json(platform);
  } catch (err) {
    console.error(err);
    res.error('Server Error at platform_id GET');
  }
});


/// /////////////////////////////////
/// /// Player Biostats Endpoints ///
/// /////////////////////////////////
router.get('/player_biostats', async (req, res) => {
  try {
    const biostats = await db.PlayerBiostats.findAll();
    res.json(biostats);
  } catch (err) {
    console.error(err);
    res.error('Server Error at Player Biostats GET');
  }
});

router.get('/player_biostats/:biostats_id', async (req, res) => {
  try {
    const biostats = await db.PlayerBiostats.findAll({
      where: {
        biostats_id: req.params.biostats_id
      }
    });
    res.json(biostats);
  } catch (err) {
    console.error(err);
    res.error('Server Error at biostats_id GET');
  }
});


/// /////////////////////////////
/// /// Player Info Endpoints ///
/// /////////////////////////////
router.get('/player_info', async (req, res) => {
  try {
    const info = await db.PlayerInfo.findAll();
    res.send(info);
  } catch (err) {
    console.error(err);
    res.error('Server Error at Player Info GET');
  }
});

router.get('/player_info/:player_id', async (req, res) => {
  try {
    const info = await db.PlayerInfo.findAll({
      where: {
        player_id: req.params.player_id
      }
    });
    res.json(info);
  } catch (err) {
    console.error(err);
    res.error('Server Error at player_id GET');
  }
});

router.put('/player_info', async (req, res) => {
  try {
    await db.PlayerInfo.update(
      {
        salary: req.body.meal_salary,
        jersey_number: req.body.jersey_number,
        position: req.body.position,
        player_college: req.body.player_college,
        nba_debut: req.body.nba_debut,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        team_id: req.body.team_id
      },
      {
        where: {
          player_id: req.body.player_id
        }
      }
    );
    res.send('Player Info Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server Error at Player Info PUT');
  }
});

router.delete('/player_info/:player_id', async (req, res) => {
  try {
    await db.PlayerInfo.destroy({
      where: {
        player_id: req.params.player_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at player_id DELETE');
  }
});


/// //////////////////////////////
/// /// Player Stats Endpoints ///
/// //////////////////////////////
router.get('/player_stats', async (req, res) => {
  try {
    const stats = await db.PlayerStats.findAll();
    res.json(stats);
  } catch (err) {
    console.error(err);
    res.error('Server Error at Player Stats GET');
  }
});

router.get('/player_stats/:gamestats_id', async (req, res) => {
  try {
    const gamestats = await db.PlayerStats.findAll({
      where: {
        gamestats_id: req.params.gamestats_id
      }
    });
    res.json(gamestats);
  } catch (err) {
    console.error(err);
    res.error('Server Error at gamestats_id GET');
  }
});

router.put('/player_stats', async (req, res) => {
  try {
    await db.PlayerStats.update(
      {
        shooting_percentage: req.body.shooting_percentage,
        three_pt_pct: req.body.three_pt_pct,
        rebounds_per_game: req.body.rebounds_per_game,
        assists_per_game: req.body.assists_per_game,
        steals_per_game: req.body.steals_per_game,
        blocks_per_game: req.body.blocks_per_game,
        player_id: req.body.player_id
      },
      {
        where: {
          gamestats_id: req.body.gamestats_id
        }
      }
    );
    res.send('Player Stats Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server Error at Player Stats PUT');
  }
});

router.delete('/player_stats/:gamestats_id', async (req, res) => {
  try {
    await db.PlayerStats.destroy({
      where: {
        gamestats_id: req.params.gamestats_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at gamestats_id DELETE');
  }
});


/// //////////////////////////////
/// /// Social Media Endpoints ///
/// //////////////////////////////
router.get('socialmedia', async (req, res) => {
  try {
    const social = await db.SocialMedia.findAll();
    res.json(social);
  } catch (err) {
    console.error(err);
    res.error('Server Error at Social Media GET');
  }
});

router.get('/socialmedia/:social_id', async (req, res) => {
  try {
    const social = await db.SocialMedia.findAll({
      where: {
        social_id: req.params.social_id
      }
    });
    res.json(social);
  } catch (err) {
    console.error(err);
    res.error('Server Error at social_id GET');
  }
});


/// //////////////////////////////
/// /// Stadium Info Endpoints ///
/// //////////////////////////////
router.get('stadium_info', async (req, res) => {
  try {
    const stadium = await db.StadiumInfo.findAll();
    res.json(stadium);
  } catch (err) {
    console.error(err);
    res.error('Server Error at Stadium Info GET');
  }
});

router.get('/stadium_info/:stadium_id', async (req, res) => {
  try {
    const stadium= await db.StadiumInfo.findAll({
      where: {
        stadium_id: req.params.stadium_id
      }
    });
    res.json(stadium);
  } catch (err) {
    console.error(err);
    res.error('Server Error at stadium_id GET');
  }
});


/// ////////////////////////////
/// /// Team Stats Endpoints ///
/// ////////////////////////////
router.get('team_info',async (req, res) => {
  try {
    const teamI = await db.team_info.findAll();
    res.json(teamI);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Team Info GET');
    }
});


/// ////////////////////////////
/// /// Team Staff Endpoints ///
/// ////////////////////////////
router.get('/team_staff', async (req, res) => {
  try {
    const staff = await db.TeamStaff.findAll();
    res.json(staff);
  } catch (err) {
    console.error(err);
    res.error('Server Error at Team Staff GET');
  }
});

router.get('/team_staff/:staff_id', async (req, res) => {
  try {
    const staff = await db.TeamStaff.findAll({
      where: {
        staff_id: req.params.staff_id
      }
    });
    res.json(staff);
  } catch (err) {
    console.error(err);
    res.error('Server Error at staff_id GET');
  }
});

router.put('/team_staff', async (req, res) => {
  try {
    await db.TeamStaff.update(
      {
        owner: req.body.owner,
        head_coach: req.body.head_coach,
        head_physician: req.body.head_physician,
        general_manager: req.body.general_manager,
        ceo: req.body.ceo,
        cfo: req.body.cfo
      },
      {
        where: {
          staff_id: req.body.staff_id
        }
      }
    );
    res.send('Team Staff Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server Error at Team Staff PUT');
  }
});

router.delete('/team_staff/:staff_id', async (req, res) => {
  try {
    await db.TeamStaff.destroy({
      where: {
        staff_id: req.params.staff_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server Error at staff_id DELETE');
  }
});





/// ///////////////////////////
/// /// Custom SQL Endpoint ///
/// ///////////////////////////
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
