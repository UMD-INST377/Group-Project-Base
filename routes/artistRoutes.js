  import express from 'express';
 import sequelize from 'sequelize';

 import db from '../database/initializeDB.js';

 const router = express.Router();

 // const songsQuery = `SELECT * FROM songs.artist;`;

 router.route('/artist').get(async (req, res) => {
     try {
       const art = await db.Artist.findAll();
       res.json({data: art});
     } catch (error) {
       console.error(error);
       res.send('Server Error');
     }
   });


   router.get('/artist/:artist_id', async (req, res) => {
     try {
       const art = await db.Artist.findAll({
         where: {
           artist_id: req.params.artist_id
         }
       });
       res.json({data: art});
     } catch (error) {
       console.error(error);
       res.send('Server Error');
     }
   });

 export default router; 