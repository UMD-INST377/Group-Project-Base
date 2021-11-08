/* Group24 */
// Name: Ali


///////////////////////////////////////////
///////ENDPOINT FOR PRESIDENT TABLE////////
//////////////////////////////////////////


import express from "express";
import sequelize from "sequelize";
//import { INSERT } from "sequelize/types/lib/query-types";
//import fetch from 'node-fetch';
import db from "../database/initializeDB.js";

const router = express.Router();

router.get('/', (req, res) => {
  console.log("Touched / with get")
  res.json("Success0");
});

// route GET
router.get("/presidents", async (req, res) => {
  try {
    // message
    console.log("Touched /presidents with get");
    res.json("READ1");
  } catch (err) {
    console.error(err);
  }
});

// implement function for the placehokder to get data by the specfic president_id


// route get id
router.get("/presidents/:president_id", async (req, res) => {
  try {
    const presidentInfoQuery = `SELECT concat(first_name, " ",last_name) as "President Name", birth_date as "Birth Date",
	home_state as "Home State", date_inaurg as "Date Inauguration",party as "Party", president_image as "President Image"
  FROM Presidents.presidents_table
  WHERE president_id = ${req.params.president_id}
  ;`;
    const presidentInfo = await db.sequelizeDB.query(presidentInfoQuery,{
      type: sequelize.QueryTypes.SELECT

    });
    // message
    console.log("Touched /presidents/:president_id with get");

    res.json(presidentInfo);
  } catch (err) {
    console.error(err);
  }
});

const timeLine = `SELECT 
president_id, CAST((SPLIT_STR(date_inaurg, ',', 2)-1) AS SIGNED) AS elected_year
FROM Presidents.presidents_table;`;
// route get id
router.get("/time_line", async (req, res) => {
  try {
    const pres = await db.sequelizeDB.query(timeLine,{
      type: sequelize.QueryTypes.SELECT
    });

    // message
    console.log("Touched /presidents/:president_id with get");

    res.json(pres);
  } catch (err) {
    console.error(err);
  }
});


// route delete
//const delPresidentId = 
router.delete("/presidents/:president_id", async (req, res) => {
  try {
      const deletePresidentQuery = `DELETE from presidents_table
      where president_id = ${req.params.president_id};`;
      const delPresident = await db.sequelizeDB.query(deletePresidentQuery,{
        type: sequelize.QueryTypes.DELETE
  
       });
     //await db.presidents.destroy({
    //   where: {
    //     president_id: req.params.president_id
    //   }
    //});
    console.log("Touched /presidents/:president_id with Delete");
    res.json("delete");
  } catch (err) {
    console.error(err);
  }
});

// route post
// const addNewRec = `INSERT INTO presidents_table(first_name, last_name, 
//   date_inaurg, age_inaurg, terms_served, birth_date, death_date, home_state, party) 
//   VALUES("ali", "shafiq", "app", 22, "2", "adsdsd", "aadd", "marylanf", "student" );`;
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
    console.log("Touched /presidents with post");
    res.json("Created");
  } catch (err) {
    console.error(err);
  }
});

// route put
router.put("/update_info", async (req, res) => {
  try {
    const updateQuery = `UPDATE presidents_table
    SET first_name = ${req.body.params.first_name}
    , last_name = ${req.body.params.last_name},
    date_inaurg = ${req.body.params.date_inaurg}, age_inaurg = ${req.body.params.age_inaurg}, terms_served = ${req.body.params.terms_served},
    birth_date = ${req.body.params.birth_date}, death_date = ${req.body.params.death_date}, home_state = ${req.body.params.home_state},
     president_image = ${req.body.params.president_image},
    party = ${req.body.params.party}
    WHERE president_id = ${req.body.params.president_id};
    `;
    const upPres = await db.sequelizeDB.query(updateQuery,{
      type: sequelize.QueryTypes.UPDATE

     });
    // await db.Presidents.update(
    //   {
    //     //president_id: req.body.president_id,
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     date_inaurg: req.body.date_inaurg,
    //     age_inaurg: req.body.age_inaurg,
    //     terms_served: req.body.terms_served,
    //     birth_date: req.body.birth_date,
    //     death_date: req.body.death_date,
    //     home_state: req.body.home_state,
    //     president_image: req.body.president_image,
    //     party: req.body.party


    //   },
    //   {
    //     where: {
    //       president_id: req.body.president_id
    //     }
    //   }
    // );
    console.log("Touched update");
    res.json(upPres);
  } catch (err) {
    console.error(err);
  }
});

export default router;
