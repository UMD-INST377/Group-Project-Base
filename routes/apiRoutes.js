/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import getVinylInfo from '../client/controllers/getVinylInfo.js';
import deleteVinyl from '../client/controllers/deleteVinyl.js';
import postVinyl from '../client/controllers/postVinyl.js';
import putVinyl from '../client/controllers/putVinyl.js';

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
/*
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
*/
/// /////////////////////////////////
/// ////William Giovanini ///////////
/// /////////////////////////////////

const sampleVinylInfo = [18, 'Sample Album', 'genre', 25, 19, '00:55:00', '2014-12-02', 0.98, 0, 'Sample Singer', 'Sample', 'Producer', 21]
const updatedSampleInfo = [18, 'Updated Album', 'updated genre', 24, 19, '00:56:00', '2015-12-02', 1.02, 1, 'Updated Singer', 'Updated', 'Producer', 22]

router.route('/vinyl')
    .get(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(getVinylInfo, {
                type: sequelize.QueryTypes.SELECT
            });
            console.log("touched vinyl with GET");
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .delete(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(deleteVinyl, {
                type: sequelize.QueryTypes.DELETE
            });
            console.log("touched vinyl with DELETE");
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .post(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(postVinyl, {
                type: sequelize.QueryTypes.POST
            });
            console.log("touched vinyl, producers, and singers with POST");
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .put(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(putVinyl, {
                type: sequelize.QueryTypes.PUT
            }, updatedSampleInfo);
            console.log("touched vinyl, producers, and singers with PUT");
            res.json(result);
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