/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";
// import { UPSERT } from "sequelize/types/lib/query-types";

import db from "../database/initializeDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("default route");
});

// db.Actor and db.Film work
router.route("/movies/:filmId")
  .get(async (req, res) => {
    try {
      const {filmId} = req.params
      const filmlist = await db.Film.findOne({where: {film_id: `${filmId}`}});

      if (filmlist !== null)
        res.send(filmlist)
    }
    catch (error) {
      console.error(error);
      res.send("Something went wrong on /movies end or the film_id isn't valid");
    }
  })
  .post((req, res) => {
    try {
    } catch (error) {
      console.error(error);
      res.send("Something went wrong on /movies end");
    }
  })
  .put((req, res) => {
    try {
    } catch (error) {
      console.error(error);
      res.send("Something went wrong on /movies end");
    }
  })
  .delete((req, res) => {
    try {
    } catch (error) {
      console.error(error);
      res.send("Something went wrong on /movies end");
    }
});

router.route('/genres/:genreId')
  .get(async (req, res) => {
    try {
      const {genreId} = req.params
      const genrelist = await db.Genre.findOne({where: {genre_id: `${genreId}`}});

      if (genrelist !== null) {
        res.send(genrelist);
      }
    }
    catch (error) {
      console.error(error);
      res.send("Something went wrong on /movies end or the film_id isn't valid");
    }
  })
  .post(async(req, res) => {
    try {
      const {genreId} = req.params;
      const genrelist = await db.Genre.create({genre_id: `${genreId}`, genre: 'Suspense'});
      res.send('Genre added');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on /movies end');
    }
  })
  .put((req, res) => {
    try {
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on /movies end');
    }
  })
  .delete(async(req, res) => {
    try {
      const {genreId} = req.params;
      // const genrelist = await db.Genre.remove({where: {genre_id = genreId}});
      res.send('Genre deleted');
      // this is not working, tried everything at the moment
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on /movies end');
    }
  });


router
  .route("/blob")
  .get((req, res) => {
    try {
      console.log("The get default route is reached");
      res.send("You have gotten the requested route from blob!");
    } catch (err) {
      console.log(error);
    }
  })
  .post((req, res) => {
    try {
      console.log("post from blob");
      res.send("You have posted something from blob!");
    } catch (error) {
      console.log(error);
    }
  })
  .delete((req, res) => {
    try {
      console.log("delete from blob");
      res.send("This has been deleted.");
    } catch (error) {
      console.log(error);
    }
  })
  .put((req, res) => {
    try {
      res.send("This request was put in blob!");
      console.log("put something inside blob");
    } catch (error) {
      console.log(error);
    }
  });

router
  .route("/boop")
  .get((req, res) => {
    try {
      console.log("The get default route is reached");
      res.send("You have gotten something from boop");
    } catch (err) {
      console.log(error);
    }
  })
  .post((req, res) => {
    try {
      console.log("post from boop");
      res.send("You have posted something from boop");
    } catch (error) {
      console.log(error);
    }
  })
  .delete((req, res) => {
    try {
      console.log("delete from boop");
      res.send("You have deleted something from boop");
    } catch (error) {
      console.log(error);
    }
  })
  .put((req, res) => {
    try {
      res.send("This request was put in boop!");
      console.log("You have put something from boop");
    } catch (error) {
      console.log(error);
    }
  });

// Testing earlier for postman ignore wink
router
  .route("/stuff")
  .get((req, res) => {
    try {
      console.log("stuff default route reached");
      res.json({ id: 123 });
    } catch (err) {
      console.log(error);
    }
  })
  .post((req, res) => {
    try {
      console.log("post from stuff");
      res.send("you have posted something cool");
    } catch (error) {
      console.log(error);
    }
  })
  .delete((req, res) => {
    try {
      console.log("delete from stuff");
      res.send("<h1>deleting</h1>");
    } catch (error) {
      console.log(error);
    }
  })
  .put((req, res) => {
    try {
      res.send("putting stuff");
      console.log("put from stuff");
    } catch (error) {
      console.log(error);
    }
  });

export default router;
