/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// //Get for all/single record////////// Dylan C
/// /////////////////////////////////

router.get('/reviews', async (req, res) => {
  try {
	var restaurant_id = req.query.restaurant_id;
	const query = 'select * from Reviews r inner join Restaurant f on (r.restaurant_id = f.restaurant_id) where r.restaurant_id = '+restaurant_id;
	const result = await db.sequelizeDB.query(query);
	res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send("Server error");
  }
});


router.get('/all-reviews', async (req, res) => {
  try {
	const query = 'select * from Reviews r inner join Restaurant f on (r.restaurant_id = f.restaurant_id)';
	const result = await db.sequelizeDB.query(query);
	res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send("Server error");
  }
});

/// /////////////////////////////////
/// //////// Post request////////// Dylan C
/// /////////////////////////////////

router.post("/review", async (req, res) => {
  const { review_id, review_desc, avg_star_rating, restaurant_id } = req.body;
  try {
    var query = `Insert into Reviews (review_id, review_desc, avg_star_rating, restaurant_id) Values (?, ?, ?, ?);`;
    const result = await db.sequelizeDB.query(query, [review_id, review_desc, avg_star_rating, restaurant_id]);
    res.json({
      data: result
    })
  } catch (err) {
    console.log(err);
    res.json("Server error");
  }
})

router.get("/review/:id", async(req, res) => {
  const id = req.params.id
  try {
    var query = 'select * from Reviews where review_id = '+id;
    const result = await db.sequelizeDB.query(query);
    res.json({
      data: result
    })
  } catch (err) {
    console.log(err);
    res.json("Server error");
  }
})

/// /////////////////////////////////
/// //////// Put Request////////// Dylan C
/// /////////////////////////////////

router.put("/review/:reviewId", async (req, res) => {
  const id = req.params.reviewId;
  console.log(req.body)
  try {
    const query = `Update Reviews SET review_desc = '${req.body.review_desc}' , avg_star_rating = ${req.body.avg_star_rating} where review_id = ${id}`;
    const result = await db.sequelizeDB.query(query);
    res.json({
      data: result
    })
  } catch (err) {
    console.log(err);
    res.json("Server error");
  }
})

/// /////////////////////////////////
/// //////// Delete Request ////////// Dylan C
/// /////////////////////////////////

router.delete("/review/:restaurantId", async (req, res) => {
  try {
    const id = req.params.restaurantId
    const query = 'Delete from Reviews where restaurant_id = '+id
    const result = await db.sequelizeDB.query(query);
    res.json({
      data: result
    })
  } catch (error) {
    console.log(error);
    res.json("Server error");
  }
})



export default router;

//end