/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

// const teamsController = require('../public/controllers/teamsController.js');
// import teamsController from '../public/controllers/teamsController.js';

router.get("/", (req, res) => {
  res.send("Welcome to the UMD Dining API!");
});

/// /////////////////////////////////
/// //// Basketball Endpoints////////
/// /////////////////////////////////

router.get("/basketball", async (req, res) => {
  // Will use await when making actual calls to the db
  try {
    console.log("touched /basketball with GET");
    res.json({ Method: "GET", Endpoint: "/basketball" });
  } catch (e) {
    console.log(e);
    res.error("Something went wrong on the server");
  }
});

// GET ALL TEAMS
router.get("/basketball/teams", async (req, res) => {
  try {
    const teams = await db.Teams.findAll();
    res.json(teams);
  } catch (e) {
    res.send(e);
  }
});

// GETS ALL ARENAS
router.get("/basketball/arenas", async (req, res) => {
  try {
    const arenas = await db.Arenas.findAll();
    res.json(arenas);
  } catch (e) {
    res.send(e);
  }
});

// GET SPECIFIC TEAM
router.get("/basketball/teams/:team_id", async (req, res) => {
  try {
    const team = await db.Teams.findAll({
      where: {
        team_id: req.params.team_id,
      },
    });
    res.json(team[0]); // return only the first team // returns list be default
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

// GET ALL PLAYERS
router.get("/basketball/players", async (req, res) => {
  try {
    const players = await db.Players.findAll();
    res.json(players);
  } catch (e) {
    res.send(e);
  }
});

// GET ALL GAMES BY TEAM BY YEAR
router.get("/basketball/games/:teamId/:year", async (req, res) => {
  try {
    const games = await db.sequelizeDB.query(
      `SELECT 
     DATE(games.date_played) AS date_played,
     team1.team_name AS home_team_name,
     games.home_team_score,
     team2.team_name AS away_team_name,
     games.away_team_score AS away_team_score
 FROM
     games
         JOIN
     teams AS team1 ON games.home_team_id = team1.team_id
         JOIN
     teams AS team2 ON games.away_team_id = team2.team_id
 WHERE
    (games.home_team_id = ${req.params.teamId}
         OR games.away_team_id = ${req.params.teamId})
         AND YEAR(games.date_played) = ${req.params.year};`,
      {
        model: db.Games,
        mapToModel: true,
      }
    );
    res.json(games);
  } catch (e) {
    res.send(e);
  }
});

// FIND GAMES BETWEEN TWO TEAMS DURING A SPECIFIC YEAR
router.get(
  "/basketball/games/:firstTeamId/:secondTeamId/:year",
  async (req, res) => {
    try {
      const games = await db.sequelizeDB.query(
        `SELECT 
      Date(games.date_played) AS date_played,
        team1.team_name AS home_team_name,
        team2.team_id AS home_team_id,
        games.home_team_score,
        team2.team_name AS away_team_name,
        team2.team_id AS away_team_id,
        games.away_team_score
      FROM
          games
              JOIN
          teams AS team1 ON games.home_team_id = team1.team_id
              JOIN
          teams AS team2 ON games.away_team_id = team2.team_id
              WHERE
              ((games.home_team_id = ${req.params.firstTeamId}
                  AND games.away_team_id = ${req.params.secondTeamId})
                  OR (games.away_team_id = ${req.params.firstTeamId}
                  AND games.home_team_id = ${req.params.secondTeamId}))
                  AND YEAR(games.date_played) = ${req.params.year};`,
        {
          model: db.Games,
          mapToModel: true,
        }
      );
      // const games = await db.Games.findAll({
      //   where: [
      //     sequelize.where(
      //       sequelize.fn("YEAR", sequelize.col("date_played")),
      //       req.params.year
      //     ),
      //     sequelize.or(
      //       {
      //         home_team_id: req.params.firstTeam,
      //         away_team_id: req.params.secondTeam,
      //       },
      //       {
      //         home_team_id: req.params.secondTeam,
      //         away_team_id: req.params.firstTeam,
      //       }
      //     ),
      //   ],
      // });
      res.json(games);
    } catch (e) {
      res.send(e);
    }
  }
);

router.get("/basketball/players/:search_query", async (req, res) => {
  try {
    const players = await db.Players.findAll({
      where: {
        last_name: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("last_name")),
          "LIKE",
          "%" + req.params.search_query.toLocaleLowerCase() + "%"
        ),
      },
    });
    res.json(players);
  } catch (e) {
    res.send(e);
  }
});

router.post("/basketball", async (req, res) => {
  // Will use await when making actual calls to the db
  try {
    res.json({ Method: "POST", Endpoint: "/basketball" });
  } catch (e) {
    res.error("Something went wrong on the server");
  }
});

// Used to add new player to database
router.post("/basketball/players", async (req, res) => {
  // Will use await when making actual calls to the db
  const players = await db.Players.findAll();
  let playerID = Math.random() * 10000;
  while (await players.find((c) => c.team_id == playerID)) {
    let playerID = Math.random() * 100000000;
  }
  try {
    const newPlayer = await db.Players.create({
      player_id: playerID,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      height: req.body.height,
      weight: req.body.weight,
      position: req.body.position,
      college: req.body.college,
      year_drafted: req.body.year_drafted,
      team_id: req.body.team_id,
    });
    res.json(newPlayer);
    console.log("touched /basketball/players with POST");
  } catch (e) {
    console.error(e);
    res.error("Something went wrong on the server");
  }
});

// Edit player from teams
router.put("/basketball/teams", async (req, res) => {
  try {
    console.log("touched /basketball with PUT");
    await db.Players.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        position: req.body.position,
        year_drafted: req.body.year_drafted,
      },
      {
        where: {
          player_id: req.body.player_id,
        },
      }
    );
    console.log("Player is Updated!");
    res.send("Successfully updated player");
  } catch (e) {
    console.log(e);
    res.error("Something went wrong on the server");
  }
});

//Delete Player from teams
router.delete("/basketball/teams", async (req, res) => {
  try {
    console.log("touched /basketball with DELETE");
    await db.Players.destroy(
      {
        where: {
          player_id: req.body.player_id,
        },
      });
    console.log("Player is Deleted!");
    res.send("Successfully deleted player");
  } catch (e) {
    console.log(e);
    res.error("Something went wrong on the server");
  }
});

router.put("/basketball", async (req, res) => {
  try {
    // Will use await when making actual calls to the DB
    console.log("touched /basketball with PUT");
    res.json({ Method: "PUT", Endpoint: "/basketball" });
  } catch (e) {
    console.log(e);
    res.error("Something went wrong on the server");
  }
});

router.delete("/basketball", async (req, res) => {
  try {
    // Will use await when making actual calls to the DB
    console.log("touched /basketball with DELETE");
    res.json({ Method: "DELETE", Endpoint: "/basketball" });
  } catch (e) {
    console.error(e);
    res.error("Something went wrong on the server");
  }
});

/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
router.get("/dining", async (req, res) => {
  try {
    const halls = await db.DiningHall.findAll();
    const reply =
      halls.length > 0 ? { data: halls } : { message: "no results found" };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/dining/:hall_id", async (req, res) => {
  try {
    const hall = await db.DiningHall.findAll({
      where: {
        hall_id: req.params.hall_id,
      },
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/dining", async (req, res) => {
  const halls = await db.DiningHall.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long,
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/dining/:hall_id", async (req, res) => {
  try {
    await db.DiningHall.destroy({
      where: {
        hall_id: req.params.hall_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/dining", async (req, res) => {
  try {
    await db.DiningHall.update(
      {
        hall_name: req.body.hall_name,
        hall_location: req.body.hall_location,
      },
      {
        where: {
          hall_id: req.body.hall_id,
        },
      }
    );
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// /////////////////////////////////
/// ////////Meals Endpoints//////////
/// /////////////////////////////////
router.get("/meals", async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/meals/:meal_id", async (req, res) => {
  try {
    const meals = await db.Meals.findAll({
      where: {
        meal_id: req.params.meal_id,
      },
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/meals", async (req, res) => {
  try {
    await db.Meals.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
      },
      {
        where: {
          meal_id: req.body.meal_id,
        },
      }
    );
    res.send("Meal Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// /////////////////////////////////
/// ////////Macros Endpoints/////////
/// /////////////////////////////////
router.get("/macros", async (req, res) => {
  try {
    const macros = await db.Macros.findAll();
    res.send(macros);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/macros/:meal_id", async (req, res) => {
  try {
    const meals = await db.Macros.findAll({
      where: {
        meal_id: req.params.meal_id,
      },
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/macros", async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Macros.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
        calories: req.body.calories,
        serving_size: req.body.serving_size,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat,
      },
      {
        where: {
          meal_id: req.body.meal_id,
        },
      }
    );
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// /////////////////////////////////
/// Dietary Restrictions Endpoints///
/// /////////////////////////////////
router.get("/restrictions", async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/restrictions/:restriction_id", async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll({
      where: {
        restriction_id: req.params.restriction_id,
      },
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom =
  "SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)";
router.get("/table/data", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
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
router.get("/map/data", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});
router.get("/custom", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// //////////////////////////////////
/// ///////Teams Endpoints////////
/// /////////////////////////////////
// router.get('/teams', teamsController.get);

// router.get('/teams', teamsController.get);

// router.get('/teams/:team_id', teamsController.get);

// router.post('/teams', teamsController.post);

// router.delete('/teams/:team_id', teamsController.delete);

// router.put('/teams', teamsController.put);

export default router;
