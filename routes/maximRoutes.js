import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
 
import maximRoutes from './maximRoutes.js';
 
const router = express.Router();
 
router.get('/', (req, res) => {
   console.log('Touched maximRoutes')
 res.json({message:'Welcome to the Group 18 API!'});
});
 
 
router.route('/playlist')
.get(async (req, res) => {
   try {
       const playlistList = await db.playlist.findAll()
       res.json({data: playlistList});
   } catch (err) {
       console.error(err);
       res.send({message: 'Error1!'});
   }
})
 
router.route('/playlist/:id')
.get(async (req, res) => {
   try {
     const {id} = req.params;
     const playlistList = await db.playlist.findAll()
     res.json({data: playlistList[id]});
   } catch (err) {
       console.error(err);
       res.json({message: 'Error2!'});
   }
})
 
 
export default router;