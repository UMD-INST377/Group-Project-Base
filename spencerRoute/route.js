import express from 'express';
import Sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Welcome to the group 22 database');
  });

router.get('/Group22_Dining_Hall_Tracker', async (req, res) => {
	try {

		// GET request body

	} catch (err) {
		console.error(err);
		res.error('Server error');
	}
});
  
router.get('/Group22_Dining_Hall_Tracker/:schedule_id', async (req, res) => {
	try {

	  	// GET request body;
		  
	res.json(hour);
	} catch (err) {
		console.error(err);
	  	res.error('Server error');
	}
});
  
export default router;