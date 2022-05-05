import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const cuisineQuery = "SELECT * FROM cuisine";
    const cuisine = await db.sequelizeDB.query(cuisineQuery);

    res.json(cuisine);
  } catch (err) {
    res.json({ message: err });
  }
});

router.route("/testing").get(async (req, res) => {
  try {
    const testQuery = "SELECT * FROM address";
    const test = await db.sequelizeDB.query(testQuery);

    res.json(test);
  } catch (err) {
    res.json({ message: err });
  }
});

// get restaurant with id
router.get("/:cuisine_id", async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string

  try {
    
    const cuisineQuery = `SELECT * FROM cuisine WHERE cuisine_id = ${req.params.cuisine_id}`;
    const cuisine = await db.sequelizeDB.query(cuisineQuery);
    res.json(cuisine);
  } catch (err) {
    res.json({ message: "Server error" });
  }
});

router.post("/cuisinepost", async (req, res) => {
  try {
    if (req.params.cuisine_name == null || req.params.cuisine_name == '') {
      throw 'wrong input data';
    }
    const cuisinePost = `INSERT INTO cuisine (cuisine_id, cuisine_name)values(${req.params.cuisine_id}, '${req.body.cuisine_name}')`;
    const cuisine = await db.sequelizeDB.query(cuisinePost);
    res.send("added");
  } catch (err) {
    res.json({ message: err });
  }
});


// for updating an entry
router.put("/cuisineput", async (req, res) => {
  try {
    if (req.body.cuisine_name == null || req.body.cuisine_name == '') {
      throw 'wrong input data';
    }
    const put = await db.sequelizeDB
      .query(`UPDATE cuisine SET cuisine_name = '${req.body.cuisine_name}' WHERE cuisine_id = ${req.body.cuisine_id}`);
    res.send("Updated");
  } catch (err) {
    res.send("Unsuccessful");
  }
});

// for deleting an entry
router.delete("/cuisinedelete/:cuisine_id", async (req, res) => {
  
  const cuisineQuery = `DELETE FROM cuisine WHERE cuisine_id = ${req.params.cuisine_id}`;
  try {
    const cuisine = await db.sequelizeDB.query(cuisineQuery, {
      type: sequelize.QueryTypes.DELETE,
    });
    res.send("Deleted Successfully");
  } catch (err) {
    console.error(err);
    res.json({ message: err });
  }
});

export default router;
