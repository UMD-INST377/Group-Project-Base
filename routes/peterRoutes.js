/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

/// /////////////////////////////////
/// ////Animals Database - Hierarchy - Peter Andrade ///
/// /////////////////////////////////

router.route("/hierarchy")
.get("/hierarchy", async (req, res) => {
  try {
    console.log("touched /hierarchy with GET");
    res.json({ data: data });
    res.json({ reply: "closed GET request" });
  } catch (error) {
    console.error(error);
    res.error("Server error");
  }
})

.put("/hierarchy", async (req, res) => {
  try {
    console.log("touched /hierarchy with PUT");
    res.json({ data: data });
    res.json({ reply: "closed PUT request" });
  } catch (error) {
    console.error(error);
    res.error("Server error");
  }
})

.post("/hierarchy", async (req, res) => {
  try {
    console.log("touched /hierarchy with POST");
    res.json({ data: data });
    res.json({ reply: "closed POST request" });
  } catch (error) {
    console.error(error);
    res.error("Server error");
  }
})

.delete("/hierarchy", async (req, res) => {
  try {
    console.log("touched /hierarchy with DELETE");
    res.json({ data: data });
    res.json({ reply: "closed DELETE request" });
  } catch (error) {
    console.error(error);
    res.error("Server error");
  }
});

export default router;
