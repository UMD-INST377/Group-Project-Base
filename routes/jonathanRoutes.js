/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

import biome from "../server/controllers/jonathanController.js";

const router = express.Router();

/// /////////////////////////////////
/// ////Animals Database - Biome - Jonathan Chen////////
/// /////////////////////////////////
router
  .route("/biome")
  .get(async (req, res) => {
    try {
      const biome = await db.Biome.findAll();
      const reply =
        biome.length > 0 ? { data: biome } : { message: "no results found" };
      console.log("touched /biome with GET");
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })

  .put(async (req, res) => {
    try {
      await db.Biome.update(
        {
          Biome: req.body.Biome,
          Continent: req.body.Continent,
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
      res.error("Server error");
    }
  })

  .post(async (req, res) => {
    const biome = await db.Biome.findAll();
    const currentId = (await biome.length) + 1;
    try {
      const newBiome = await db.Biome.create({
        biome_id: currentId,
        Biome: req.body.Biome,
        Continent: req.body.Continent,
      });
      console.log("touched /biome with POST");
      res.json(newBiome);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })

  .delete(async (req, res) => {
    try {
      await db.Biome.destroy({
        where: {
          biome_id: req.params.biome_id,
        },
      });
      console.log("touched /biome with DELETE");
      res.send("Successfully deleted");
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  });
export default router;
