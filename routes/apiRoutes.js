/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-console */
import express from 'express';
import getVinylInfo from '../client/controllers/getVinylInfo';
//import sequelize from 'sequelize';

//import db from '../database/initializeDB.js';

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

router.route('/api/vinyls')
    .get(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(getVinylInfo, {
                type: sequelize.QueryTypes.SELECT
            });
            console.log("touched /vinyls with GET");
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .post(async(req, res) => {
        try {
            const reply = "Peter Goldmark is credited as the inventor of the 33 1/3 rpm vinyl record";
            console.log("touched /lp with POST");
            res.json(reply);
        } catch (err) {
            console.log(err);
        }
    })
    .put(async(req, res) => {
        try {
            const reply = "Peter Goldmark is credited as the inventor of the 33 1/3 rpm vinyl record";
            console.log("touched /lp with PUT");
            res.json(reply);
        } catch (err) {
            console.log(err);
        }
    })
    .delete(async(req, res) => {
        try {
            const reply = "Peter Goldmark is credited as the inventor of the 33 1/3 rpm vinyl record";
            console.log("touched /lp with DELETE");
            res.json(reply);
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