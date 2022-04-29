/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import barkcontroller from '../controller/barkcontroller.js';
import classificationcontroller from '../controller/classificationcontroller.js';
import flowerscontroller from '../controller/flowerscontroller.js';
import foliagecontroller from '../controller/foliagecontroller.js';
import fruitscontroller from '../controller/fruitscontroller.js';
import locationcontroller from '../controller/locationcontroller.js';
import plant_locationcontroller from '../controller/plant_locationcontroller.js';
import plantscontroller from '../controller/plantscontroller.js';

import 

const router = express.Router();
/* bark endpoint */
router.route('/bark')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(barkcontroller.barkGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(barkcontroller.barkPut,
        {
          replacements: {
            bark_id: req.body.bark_id,
            plants: req.body.plant
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json({data: result});
      console.log('Successfully Updated');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  })

  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(barkcontroller.barkPost,
        {
          replacements: {
            plants: req.body.plants,
            new_color: req.body.new_color,
            new_texture: req.body.new_texture,
            mature_color: req.body.mature_color,
            mature_texture: req.body.mature_texture
          },
          type: sequelize.QueryTypes.INSERT
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(barkcontroller.barkDelete, {
        replacements: {
          bark_id: req.body.bark_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* classification endpoint */
router.route('/classification')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(classificationcontroller.classificationGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(classificationcontroller.classificationPut,
        {
          replacements: {
            family_id: req.body.family_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })
  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(classificationcontroller.classificationPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(classificationcontroller.classificationDelete, {
        replacements: {
          family_id: req.body.family_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* flowers endpoint */
router.route('/flowers')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(flowerscontroller.flowersGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(flowerscontroller.flowersPut,
        {
          replacements: {
            flower_id: req.body.flower_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(flowerscontroller.flowersPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(flowerscontroller.flowersDelete, {
        replacements: {
          flower_id: req.body.flower_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* foliage endpoint */
router.route('/foliage')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(foliagecontroller.foliageGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(foliagecontroller.foliagePut,
        {
          replacements: {
            foliage_id: req.body.foliage_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(foliagecontroller.foliagePost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(foliagecontroller.foliageDelete, {
        replacements: {
          foliage_id: req.body.foliage_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* fruits endpoint */
router.route('/fruits')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(fruitscontroller.fruitsGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(fruitscontroller.fruitsPut,
        {
          replacements: {
            fruit_id: req.body.fruit_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(fruitscontroller.fruitsPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(fruitscontroller.fruitsDelete, {
        replacements: {
          fruit_id: req.body.fruit_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* location endpoint */
router.route('/location')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(locationcontroller.locationGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(locationcontroller.locationPut,
        {
          replacements: {
            location_code: req.body.location_code,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(locationcontroller.locationPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(locationcontroller.locationDelete, {
        replacements: {
          location_code: req.body.location_code
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* plant_location */
router.route('/plant_location')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(plant_locationcontroller.plant_locationGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(plant_locationcontroller.plant_locationPut,
        {
          replacements: {
            plant_id: req.body.plant_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(plant_locationcontroller.plant_locationPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(plant_locationcontroller.plant_locationDelete, {
        replacements: {
          plant_id: req.body.plant_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* plants endpoint */
router.route('/plants')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(plantscontroller.plantsGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(plantscontroller.plantsPut,
        {
          replacements: {
            plant_id: req.body.plant_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(plantscontroller.plantsPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(plantscontroller.plantsDelete, {
        replacements: {
          plant_id: req.body.plant_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/// //////////////////////////////////////////

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
router.get('/dining', async (req, res) => {
  try {
    const halls = await db.DiningHall.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/dining/:hall_id', async (req, res) => {
  try {
    const hall = await db.DiningHall.findAll({
      where: {
        hall_id: req.params.hall_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/dining', async (req, res) => {
  const halls = await db.DiningHall.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/dining/:hall_id', async (req, res) => {
  try {
    await db.DiningHall.destroy({
      where: {
        hall_id: req.params.hall_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/dining', async (req, res) => {
  try {
    await db.DiningHall.update(
      {
        hall_name: req.body.hall_name,
        hall_location: req.body.hall_location
      },
      {
        where: {
          hall_id: req.body.hall_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Meals Endpoints//////////
/// /////////////////////////////////
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/meals/:meal_id', async (req, res) => {
  try {
    const meals = await db.Meals.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/meals', async (req, res) => {
  try {
    await db.Meals.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Meal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Macros Endpoints/////////
/// /////////////////////////////////
router.get('/macros', async (req, res) => {
  try {
    const macros = await db.Macros.findAll();
    res.send(macros);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/macros/:meal_id', async (req, res) => {
  try {
    const meals = await db.Macros.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/macros', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Macros.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
        calories: req.body.calories,
        serving_size: req.body.serving_size,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Dietary Restrictions Endpoints///
/// /////////////////////////////////
router.get('/restrictions', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/restrictions/:restriction_id', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll({
      where: {
        restriction_id: req.params.restriction_id
      }
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;