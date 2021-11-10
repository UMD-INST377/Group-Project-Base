/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
//works if replace verbs with actorController
import actor from '../controllers/actorController.js';

const router = express.Router();

router.route('/actor')
  .get(async (req, res) => {
    try {
      const movieActors = await db.sequelizeDB.query (actor.getActor, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(movieActors);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /actor with PUT'});
      console.log(message);
      console.log(req);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /actor with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /actor with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/award')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /award with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /award with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /award with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /award with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/director')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /director with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /director with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /director with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /director with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/film')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /film with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /film with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /film with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /film with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/genre')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /genre with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /genre with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /genre with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /genre with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/oscar')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /oscar with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /oscar with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /oscar with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /oscar with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/studio')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /studio with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /studio with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /studio with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /studio with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });

router.route('/writer')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /writer with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /writer with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /writer with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /writer with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });

export default router;
