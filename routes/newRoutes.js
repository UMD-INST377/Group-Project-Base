import express from "express";

const router = express.Router();

//suhail's routes to the artists endpoint which would map to the "singers" table of our SQL DB
router
  .route("/artists")
  .get((req, res) => {
    try {
      console.log("touched /artists with GET");
    } catch (err) {
      console.log(error);
      res.json({ error: "Data machine broke!" });
    }
  })
  .put((req, res) => {
    try {
      console.log("touched /artists with PUT");
    } catch (err) {
      console.log(error);
      res.json({ error: "Data machine broke!" });
    }
  })
  .post((req, res) => {
    try {
      console.log("touched /artists with POST");
    } catch (err) {
      console.log(error);
      res.json({ error: "Data machine broke!" });
    }
  })
  .delete((req, res) => {
    try {
      console.log("touched /artists with DELETE");
    } catch (err) {
      console.log(error);
      res.json({ error: "Data machine broke!" });
    }
  });
