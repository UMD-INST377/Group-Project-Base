/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

/// /////////////////////////////////
/// ////Animals Database - Biome - Jonathan Chen////////
/// /////////////////////////////////
router
  .route("/biome")
  .get("/biome", async (req, res) => {
    try {
      console.log("touched /biome with GET");
      res.json({ data: data });
      res.json({ reply: "closed GET request" });
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })

  .put("/biome", async (req, res) => {
    try {
      console.log("touched /biome with PUT");
      res.json({ data: data });
      res.json({ reply: "closed PUT request" });
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })

  .post("/biome", async (req, res) => {
    try {
      console.log("touched /biome with POST");
      res.json({ data: data });
      res.json({ reply: "closed POST request" });
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })

  .delete("/biome", async (req, res) => {
    try {
      console.log("touched /biome with DELETE");
      res.json({ data: data });
      res.json({ reply: "closed DELETE request" });
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  });
export default router;
