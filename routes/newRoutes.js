/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import pricescontroller from '../sever/controllers/pricescontroller';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('You touched the default route');
  res.json({ message: 'Welcome to the Vinyl Database'});
});

// suhail's routes to the artists endpoint which would map to the "singers" table of our SQL DB
router.route('/artists')
  .get((req, res) => {
    try {
      console.log('touched /artists with GET')
      res.json({ artist: 'Nirvana'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })

  .put((req, res) => {
    try {
      res.json({ message: 'touched /artists with PUT'})
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'touched /artists with POST'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'touched /artists with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  });

// Diego's routes to the songs endpoint which would map to the "songs" table of our SQL DB
router.route('/songs')
  .get((req, res) => {
    try {
      console.log('touched /songs with GET')
      res.json({ songs: 'Smells Like Teen Spirit'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })

  .put((req, res) => {
    try {
      res.json({ message: 'touched /songs with PUT'})
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'touched /songs with POST'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'touched /songs with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  });

// Minghao's routes to the prices endpoint which would map to the "prices" table of our SQL DB
import prices_table from '../sever/controllers/pricescontroller';
router.route('/prices')
    .get(async(req,res) =>{
        try{
            const prices=await db.prices.query(pricescontroller.pricesGet,{
              type: sequelize.QueryTypes.SELECT
            });
          console.log('Touched route!')
          res.json({message:'Touched prices with GET'});
        } catch(err){
          res.json({error:'Oops Error!'})
        }
    })

    .put(async(req,res) =>{
        try{
            await db.prices.update({
                highest_discog = req.body.highest_discog,
                average_discog = req.body.average_discog,
                lowerst_discog = req.body.lowerest_discog,
                highest_amazon = req.body.highest_amazon
            },
            {
              where:{
                vinyl_id = req.body.vinyl_id,
              }
            }
            );
            res.send({message: 'Touched prices with PUT'});
          } catch (err){
            console.log(error);
            res.json({error: 'Oops Error!'})
          }
        })
    .post(async(req,res) => {
        const prices = await db.prices.findall();
        const currentId=(await prices.length)+1
        try{
        const newPrice= await db.prices.create({
          vinyl_id = req.body.vinyl_id,
          highest_discog = req.body.highest_discog,
          average_discog = req.body.average_discog,
          lowerst_discog = req.body.lowerest_discog,
          highest_amazon = req.body.highest_amazon
        });   
        
        }
        catch(err){
            console.log(error);
            res.json({error:"Oops Error!"});
        }
    })
    .delete((req,res) =>{
        try{
            res.send('Touched prices with DELETE');
        }
        catch(err){
            console.log(error);
            res.json({error:"Oops Error!"});
        }
    });
