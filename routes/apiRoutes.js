/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import getVinylInfo from '../client/controllers/getVinylInfo.js';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////Jomer Paulino ///////////////
/// /////////////////////////////////

router.route("/music")
    .get(async(req, res) => {
        try {
            console.log("touched /music with GET");
            res.json({ message: 'The top-selling vinyl album in the United States was Harry Styles "Fine line" with 232 thousand Vinyl albums sold.' });
        } catch (e) {
            console.log(e);
            res.json({ error: "Something went wrong" });
        }
    })
    .post(async(req, res) => {
        try {
            console.log("touched /music with POST");
            res.json({ message: "touched /music with POST" });
        } catch (e) {
            console.log(e);
            res.json({ error: "Something went wrong" });
        }
    })
    .put(async(req, res) => {
        try {
            console.log("touched /music with PUT");
            res.json({ message: "touched /music with PUT" });
        } catch (e) {
            console.log(e);
            res.json({ error: "Something went wrong" });
        }
    })
    .delete(async(req, res) => {
        try {
            console.log("touched /music with DELETE");
            res.json({ message: "touched /music with DELETE" });
        } catch (e) {
            console.log(e);
            res.json({ error: "Something went wrong" });
        }
    });

/// /////////////////////////////////
/// ////Chi-Hao Sheng ///////////////
/// /////////////////////////////////

router.route("/vinyl")
    .get(async(req, res) => {
        try {
            console.log("touched /music with GET");
            res.json({ message: "touched /music with GET" });
        } catch (e) {
            console.log(e);
            res.json({ error: "Something went wrong" });
        }
    })
    .post((req, res) => {
        try {
            console.log("touched /music with POST");
            res.json({ message: "touched /music with GET" });
        } catch (e) {
            console.log({ error: "Something went wrong" });
        }
    })
    .put((req, res) => {
        try {
            console.log("touched /music with PUT");
            res.json({ message: "touched /music with PUT" });
        } catch (e) {
            console.log({ error: "Something went wrong" });
        }
    })
    .delete((req, res) => {
        try {
            console.log("touched /music with DELETE");
            res.json({ message: "touched /music with DELETE" });
        } catch (e) {
            console.log({ error: "Something went wrong" });
        }
    });

/// /////////////////////////////////
/// ////William Giovanini ///////////
/// /////////////////////////////////
// curl -X POST http://localhost:3000/api/vinyl -d 'singer_id=18&album_name="Sample Album"&genre="genre"&track_amount=25&producer_id=19&runtime="00:55:00"&first_available="2014-12-02"&weight=0.98&is_explicit=0'

router.route('/lp')
    .get(async(req, res) => {
        try {
            console.log("touched /lp with GET");
            res.json({message: "touched /lp with GET" });
        } catch (err) {
            console.log(err);
        }
    })
    .delete(async(req, res) => {
        try {
            console.log("touched /lp with DELETE");
            res.json({message: "touched /lp with DELETE" });
        } catch (err) {
            console.log(err);
        }
    })
    .post(async(req, res) => {
        try {
            console.log("touched /lp with POST");
            res.json({message: "touched /lp with POST" });
        } catch (err) {
            console.log(err);
        }
    })
    .put(async(req, res) => {
        try {
            console.log("touched /lp with PUT");
            res.json({message: "touched /lp with PUT" });
        } catch (err) {
            console.log(err);
        }
    });

/// /////////////////////////////////
/// ///////////Phat Vu///////////////
/// /////////////////////////////////

router.route('/genre')
    .delete(async(req, res) => {
        try {
            const reply = "touched /genre with DELETE";
            console.log("touched /genre with DELETE");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    })

    .get(async(req, res) => {
        try {
            const reply = "touched /genre with GET";
            console.log("touched /genre with GET");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    })

    .post(async(req, res) => {
        try {
            const reply = "touched /genre with POST";
            console.log("touched /genre with POST");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    })

    .put(async(req, res) => {
        try {
            const reply = "touched /genre with PUT";
            console.log("touched /genre with PUT");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    });

/// /////////////////////////////////
/// ///////////Mark Schiavo///////////////
/// /////////////////////////////////
    router.route('/singers')
    .delete(async(req, res) => {
        try {
            const reply = "touched /singers with DELETE";
            console.log("touched /singers with DELETE");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    })

    .get(async(req, res) => {
        try {
            const reply = "touched /singers with GET";
            console.log("touched /singers with GET");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    })

    .post(async(req, res) => {
        try {
            const reply = "touched /singers with POST";
            console.log("touched /singers with POST");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    })

    .put(async(req, res) => {
        try {
            const reply = "touched /singers with PUT";
            console.log("touched /singers with PUT");
            res.json(reply);
        } catch (e) {
            console.log(e);
        }
    });

export default router;