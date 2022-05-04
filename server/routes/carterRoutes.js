/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";
import db from "../database/initializeDB.js";

const router = express.Router();

router.get("/review", async (req, res) => {
  try {
    const review = await db.sequelizeDB.query("select * from Reviews");
    res.json({ data: review });
  } catch {
    res.send("error");
  }
});

/// /////////////////////////////////
/// ////////               ////////// by Carter C
/// /////////////////////////////////

export default router;
