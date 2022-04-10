import express from 'express';
import Sequelize from 'sequelize';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the group 22 database');
});