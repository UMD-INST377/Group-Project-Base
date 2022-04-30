/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";
import db from "../database/initializeDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Hispanic Restaurants API!");
});

/// /////////////////////////////////
/// //////// Area Endpoints by Ryan Essem //////////
/// /////////////////////////////////

router.get("/area", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query("SELECT * FROM Area");
    res.json({ data: result[0] });
  } catch (err) {
    console.error(err);
    res.send("Server error");
  }
});

router.get("/area/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.sequelizeDB.query(
      `SELECT * FROM Area WHERE area_id = ${id}`
    );
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send("Server error");
  }
});

router.post("/area", async (req, res) => {
  // const area = await db.Area.findAll();

  try {
    const query = `INSERT INTO Area (area_id, neighborhood, landmarks, description) VALUES (${parseInt(
      req.body.area_id
    )}, '${req.body.neighborhood}', '${req.body.landmarks}', '${
      req.body.description
    }')`;
    console.log(query);
    const newArea = await db.sequelizeDB.query(query);
    res.send("UPDATED");
  } catch (error) {
    console.error(error);
  }
});

// DELETE

router.delete("/area", async (req, res) => {
  try {
    const deletedArea = await db.sequelizeDB.query(
      `DELETE FROM Area WHERE area_id = ${req.body.area_id}`
    );
    res.send("RECORDS SUCCESSFULLY DELETED AND UPDATED");
  } catch (error) {
    console.error(error);
    res.send("Server error");
  }
});

// UPDATE!
router.put("/area", async (req, res) => {
  try {
    const updatedArea = await db.sequelizeDB.query(
      `UPDATE Area SET neighborhood = '${req.body.neighborhood}', landmarks = '${req.body.landmarks}', description = '${req.body.description}' WHERE area_id = ${req.body.area_id}`
    );
    res.send("Successfully Updated");
  } catch (error) {
    console.error(error);
    res.send("Server error");
  }
});
export default router;

// added more
