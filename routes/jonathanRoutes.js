/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

import biomeSQL from "../server/controllers/jonathanController.js";

const router = express.Router();

/// /////////////////////////////////
/// ////Animals Database - Biome - Jonathan Chen////////
/// /////////////////////////////////
router
  .route("/biome")
  .get(async (req, res) => {
    try {
      // eslint-disable-next-line no-shadow
      const biome = await db.sequelizeDB.query(biomeSQL, {
        type: sequelize.QueryTypes.SELECT,
      });
      const reply =
        biome.length > 0 ? { data: biome } : { message: "no results found" };
      console.log("touched /biome with GET");
      res.json(reply);
      return reply;
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  })

  .put(async (req, res) => {
    try {
      await db.biome.update(
        {
          biome: req.body.biome,
          continent: req.body.continent,
        },
        {
          where: {
            biome_id: req.body.biome_id,
          },
        }
      );
      console.log("touched /biome with PUT");
      res.send("Successfully updated");
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  })

  .post(async (req, res) => {
    // eslint-disable-next-line no-shadow
    const biome = await db.sequelizeDB.query(biomeSQL, {
      type: sequelize.QueryTypes.SELECT,
    });
    const currentId = (await biome.length) + 1;
    try {
      const newBiome = await db.Biome.create({
        biome_id: currentId,
        biome: req.body.Biome,
        continent: req.body.Continent,
      });
      console.log("touched /biome with POST");
      res.json(newBiome);
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  })

  .delete(async (req, res) => {
    try {
      await db.biome.destroy({
        where: {
          biome_id: req.params.biome_id,
        },
      });
      console.log("touched /biome with DELETE");
      res.send("Successfully deleted");
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  });
export default router;
