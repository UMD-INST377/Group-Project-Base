import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import date from '../controllers/date.js';

/* eslint-disable no-console */

const router = express.Router();

/* Date Endpoint */

router.get('/date', async(req,res) => {
  try {
    console.log('touched /date with GET');
    const result = await db.sequelizeDB.query(date.getDate, {
      type:sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
      console.log(error)
      res.send({message:"something went wrong"});
  }
})

// router.get('/date', async (req, res) => {
//     try {
//       console.log('touched /date with GET');
//       if (!req.body) {
//         const result = await db.sequelizeDB.query(date.getDate, {
//           replacements: {
//             id: 'req.body.id'
//           },
//           type: sequelize.QueryTypes.SELECT
//         })
//       }
//       else {
//         const result = await db.sequelizeDB.query(date.getDateByID, {
//           replacements: {
//             id: req.body.id }
//         })
//       }
//       res.json(result);
//     } catch (err) {
//       console.log(err);
//     }      
//   })

router.put('/date', async (req, res) => {
    try {
      console.log('touched /date with PUT');
      const result = await db.sequelizeDB.query(date.putDate, {
        replacements: {
          id: req.body.id, date: req.body.date
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.send({message:"uhoh"});
    }
  })
  // .post(async (req, res) => {
  //   try {
  //     console.log('touched /date with POST');
  //     res.json({ message: 'POST endpoint'} );
  //   } catch (err) {
  //       console.log(err);
  //   }
  // })
  // .delete (async (req, res) => {
  //   try {
  //     console.log('touched /date with DELETE');
  //     res.json({ message: 'DELETE endpoint' });
  //   } catch(err) {
  //       console.log(err);
  //   }
  // });

  router.get('/', (req, res) => {
    res.json('You have touched the date endpoint');
  });
  
  export default router;