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
 

router.route('/playlist')
.post(async (req, res) => {
    const playlistList = await db.playlist.findAll();
    const currentId = (await playlistList.length) + 1;
    try {
      const newGenre = await db.playlist.create({
        playlist_id: currentId,
        playlist_title: req.body.playlist_name,
        song_id: req.body.song_id,
      });
      res.json(newPlaylist);
    } catch (err) {
      console.error(err);
      res.error('Playlist Post Error!');
    }
  });

router.route('/playlist/:id')
.put(async (req, res) => {
    try {
      const {id} = req.params;
      await db.genre.update(
        {
          playlist_title: req.body.playlist_title
        },
        {
          song_id: req.body.song_id
        },
        {
          where: {
            playlist_id: id
          }
        }
      );
      res.send('Playlist Successfully Updated');
    } catch (err) {
      console.error(err);
      res.json({message: 'Playlist Put Error!'});
    }
});

router.route('/playlist/:id')
.delete(async (req, res) => {
    try {
      await db.playlist.destroy({
        where: {
          playlist_id: req.params.playlist_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Playlist Delete Error!');
    }
  });

 
export default router;