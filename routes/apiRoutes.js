/* Group24 */
/* Lab 9 - Betzalel Moskowitz*/

import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Touched / with get")
  res.send("Success0");
});

// route get
router.get("/presidents", async (req, res) => {
  try {
    console.log("Touched /presidents with get");
    res.json("READ1");
  } catch (err) {
    console.error(err);
  }
});

//route get id
router.get("/presidents/:president_id", async (req, res, next) => {
  try {
    // const hall = await db.presidents.findAll({
    //   where: {
    //     president_id: req.params.president_id
    //   }

    // });
    // message
    console.log("Touched /presidents/:president_id with get");

    res.json("READ2");
  } catch (err) {
    console.error(err);
  }
});

// route post
router.post("/presidents", async (req, res) => {
  // const pres = await db.presidents.findAll();
  // const currentId = (await pres.length) + 1;
  try {
    // const newPresident = await db.presidents.create({
    //   president_id: currentId,
    //   president_name: req.body.president_name,
    //   vice_president: req.body.vice_president,
    //   fist_lady: req.body.fist_lady,
    //   children: req.body.children
    // });
    // message
    console.log("Touched /presidents with post");
    res.json("Created");
  } catch (err) {
    console.error(err);
  }
});

// route delete
router.delete("/presidents/:president_id", async (req, res) => {
  try {
    // await db.presidents.destroy({
    //   where: {
    //     president_id: req.params.president_id
    //   }
    // });
    console.log("Touched /presidents/:president_id with Delete");
    res.json("Successfully Deleted");
  } catch (err) {
    console.error(err);
  }
});

// route put
router.put("/presidents", async (req, res) => {
  try {
    // await db.presidents.update(
    //   {
    //     president_name: req.body.president_name,

    //   },
    //   {
    //     where: {
    //       president_id: req.body.president_id
    //     }
    //   }
    // );
    console.log("Touched /presidents with put");
    res.json("Successfully Updated");
  } catch (err) {
    console.error(err);
  }
});

export default router;
