/* eslint-disable no-console */

// export into controllers later?
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the AAPI Art Corner API!");
});

/// /////////////////////////////////
/// ////Media Endpoints////////
/// /////////////////////////////////
router
  .route("/media")
  .get(async (req, res) => {
    try {
      const media = await db.all_media.findAll();
      const reply =
        media.length > 0 ? { data: media } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .post(async (req, res) => {
    const media = await db.all_media.findAll();
    const currentId = (await media.length) + 1;
    try {
      const newMedia = await db.all_media.create({
        media_id: currentId,
        media_title: req.body.media_title,
        media_type: req.body.media_type,
        media_release_year: req.body.media_release_year,
        media_description: req.body.media_description,
        media_duration: req.body.media_duration,
        album_songs_number: req.body.album_songs_number,
        television_seasons_number: req.body.television_seasons_number,
        audience_rating: req.body.audience_rating,
        show_still_airing: req.body.show_still_airing
      });
      res.json(newMedia);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .put(async (req, res) => {
    try {
      await db.all_media.update(
        {
          media_title: req.body.media_title,
          media_type: req.body.media_type,
          media_release_year: req.body.media_release_year,
          media_description: req.body.media_description,
          media_duration: req.body.media_duration,
          album_songs_number: req.body.album_songs_number,
          television_seasons_number: req.body.television_seasons_number,
          audience_rating: req.body.audience_rating,
          show_still_airing: req.body.show_still_airing
        },
        {
          where: {
            media_id: req.body.media_id
          }
        }
      );
      res.send("Successfully Updated");
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .delete((req, res) => {
    res.send("Action unavailable");
  });

/// /////////////////////////////////
/// ////Creators Endpoints////////
/// /////////////////////////////////

router
  .route("/creators")
  .get(async (req, res) => {
    try {
      const creators = await db.creators.findAll();
      const reply =
        creators.length > 0
          ? { data: creators }
          : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .post(async (req, res) => {
    const creators = await db.creators.findAll();
    const currentId = (await creeators.length) + 1;
    try {
      const newCreator = await db.creators.create({
        creator_id: currentId,
        creator_first_name: req.body.creator_first_name,
        creator_last_name: req.body.creator_last_name,
        creator_current_state: req.body.creator_current_state,
        creator_home_state: req.body.creator_home_state,
        creator_country: req.body.creator_country
      });
      res.json(newCreator);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .put(async (req, res) => {
    try {
      await db.creators.update(
        {
          creator_first_name: req.body.creator_first_name,
          creator_last_name: req.body.creator_last_name,
          creator_current_state: req.body.creator_current_state,
          creator_home_state: req.body.creator_home_state,
          creator_country: req.body.creator_country
        },
        {
          where: {
            creator_id: req.body.creator_id
          }
        }
      );
      res.send("Successfully Updated");
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .delete((req, res) => {
    res.send("Action unavailable");
  });

export default router;
