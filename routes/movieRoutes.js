/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});
router.route('/actor')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /actor with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /actor with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /actor with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /actor with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/award')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /award with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /award with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /award with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /award with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/director')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /director with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /director with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /director with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /director with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/film')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /film with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /film with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /film with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /film with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/genre')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /genre with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /genre with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /genre with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /genre with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/oscar')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /oscar with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /oscar with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /oscar with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /oscar with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
router.route('/studio')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /studio with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /studio with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /studio with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /studio with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });

router.route('/writer')
  .get(async (req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /writer with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /writer with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /writer with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      console.log(message);
      res.json({message: 'Touched the /writer with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });
