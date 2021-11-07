/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Hotel App!');
});

/// /////////////////////////////////
/// ////Hotel Finder Endpoints////////
/// /////////////////////////////////
router.get('/amenities', async (req, res) => {
  try {
    const const_name = await db.TableName.findAll();
    const reply = const_name.length > 0 ? { data: const_name } : { message: 'no results found' };
    res.json(reply);
    console.log('you touched the amenities route');
  } catch (err) {
    console.error(err);
  }
  res.send('this is the amenities page');
  console.log('you touched the search route');
});

router.get('/beds', async (req, res) => {
  res.send('this is the bed count page');
  console.log('you touched the search route');
});

router.get('/hotel_amenities_join', async (req, res) => {
  res.send('this is the hotel_amenities_join page');
  console.log('you touched the hotel_amenities_join route');
});

router.get('/hotel_overview', async (req, res) => {
  res.send('this is the hotel_overview page');
  console.log('you touched the hotel_overview route');
});

router.get('/hotel_type', async (req, res) => {
  res.send('this is the hotel_type page');
  console.log('you touched the hotel_type route');
});

router.get('/locations', async (req, res) => {
  res.send('this is the locations page');
  console.log('you touched the locations route');
});

router.get('/restaurants', async (req, res) => {
  res.send('this is the restaurants page');
  console.log('you touched the restaurants route');
});

router.get('/room', async (req, res) => {
  res.send('this is the room page');
  console.log('you touched the room route');
});

router.get('/room_type', async (req, res) => {
  res.send('this is the room_type page');
  console.log('you touched the room_type route');
});

router.get('/review', async (req, res) => {
  res.send('this is the reviews page');
  console.log('you touched the room_type route');
});

router.get('/cuisine_type', async (req, res) => {
  res.send('this is the cuisine_type page');
  console.log('you touched the restaurants route');
});

export default router;
