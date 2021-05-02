/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////Players Endpoints////////
/// /////////////////////////////////
router.get('/players', async (req, res) => {
  try {
    const players = await db.players.findAll();
    const reply = players.length > 0 ? { data: players } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/players/:player_id', async (req, res) => {
  try {
    const players = await db.players.findAll({
      where: {
        player_id: req.params.player_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/players', async (req, res) => {
  const players = await db.players.findAll();
  const currentId = (await players.length) + 1;
  try {
    const newPlayer = await db.Players.create({
        player_id: currentId,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        club_id: req.body.club_id,
        shirt_number: req.body.shirt_number,
        position: req.body.position
    });
    res.json(newPlayer);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/players/:player_id', async (req, res) => {
  try {
    await db.players.destroy({
      where: {
        player_id: req.params.player_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/players', async (req, res) => {
  try {
    await db.players.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        club_id: req.body.club_id,
        shirt_number: req.body.shirt_number,
        position: req.body.position
      },
      {
        where: {
          player_id: req.body.player_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Clubs Endpoints////////
/// /////////////////////////////////
router.get('/clubs', async (req, res) => {
  try {
    const clubs = await db.clubs.findAll();
    const reply = clubs.length > 0 ? { data: clubs } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/clubs/:club_name', async (req, res) => {
  try {
    const clubs = await db.clubs.findAll({
      where: {
        club_id: req.params.club_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/clubs', async (req, res) => {
  const clubs = await db.clubs.findAll();
  const currentId = (await clubs.length) + 1;
  try {
    const newClub = await db.clubs.create({
        club_id: currentId,
        club_name: req.body.club_name,
        coach_first_name: req.body.coach_first_name,
        coach_last_name: req.body.coach_last_name,
        num_of_players: req.body.num_of_players
    });
    res.json(newClub);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/clubs/:club_id', async (req, res) => {
  try {
    await db.clubs.destroy({
      where: {
        club_id: req.params.club_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/clubs', async (req, res) => {
  try {
    await db.clubs.update(
      {
        club_name: req.body.club_name,
        coach_first_name: req.body.coach_first_name,
        coach_last_name: req.body.coach_last_name,
        num_of_players: req.body.num_of_players
      },
      {
        where: {
          club_id: req.body.club_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Player Goals Endpoints////////
/// /////////////////////////////////

router.get('/player_goals', async (req, res) => {
  try {
    const player_goals = await db.player_goals.findAll();
    const reply = player_goals.length > 0 ? { data: player_goals } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/player_goals/:player_id', async (req, res) => {
  try {
    const player_goals = await db.player_goals.findAll({
      where: {
        player_id: req.params.player_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/player_goals', async (req, res) => {
  const player_goals = await db.player_goals.findAll();
  const currentId = (await player_goals.length) + 1;
  try {
    const newPlayer_goals = await db.player_goals.create({
        player_id: currentId,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        goals: req.body.goals,
        assists: req.body.assists
    });
    res.json(newPlayer_goals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/player_goals/:player_id', async (req, res) => {
  try {
    await db.player_goals.destroy({
      where: {
        player_id: req.params.player_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/player_goals', async (req, res) => {
  try {
    await db.player_goals.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        goals: req.body.goals,
        assists: req.body.assists       
      },
      {
        where: {
          player_id: req.body.player_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
