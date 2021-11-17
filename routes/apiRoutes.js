/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

import aoaController from '../server/controllers/aoaController.js';
import EvidenceController from '../server/controllers/EvidenceController.js';
import volcanosHasReferencesController from '../server/controllers/volcanosHasReferencesController.js';
import eruptionCategoryController from '../server/controllers/eruptionCategoryController.js';
import veiController from '../server/controllers/veiController.js';

const router = express.Router();

/* eruption_aoa endpoint */
router.route('/eruption_aoa')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(aoaController.aoaGet, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('you touched the route!');
      res.json(result);
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(aoaController.aoaPut, {
        replacements: {
          aoa_id: req.body.aoa_id,
          aoa: req.body.aoa
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      console.log('Successfully updated eruption_aoa')
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(aoaController.aoaPost, {
        replacements: {aoa: req.body.aoa},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully inserted into eruption_aoa')
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(aoaController.aoaDelete, {
        replacements: {
          aoa_id: req.body.aoa_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Successfully deleted from eruption_aoa')
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  });

/* eruption_category endpoint */
router.route('/eruption_category')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(eruptionCategoryController.categoryGet, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('you touched the route!');
      res.json(result);
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(eruptionCategoryController.categoryPut, {
        replacements: {
          category_id: req.body.category_id,
          category: req.body.category
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      console.log('Successfully updated eruption_category')
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })

  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(eruptionCategoryController.categoryPost, {
        replacements: {category: req.body.category},
        type: sequelize.QueryTypes.INSERT
      });
      console.log('Successfully inserted into eruption_category')
      res.json(result);
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(eruptionCategoryController.categoryDelete, {
        replacements: {
          category_id: req.body.category_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      console.log('Successfully deleted from eruption_category')
      res.json(result);
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  });

/* eruption_info endpoint */
router.route('/eruption_info')
  .get(async(req, res) => {
    try {
      console.log('you touched the route!');
      res.json({message: 'touched eruption_info with GET'});
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .put(async(req, res) => {
    try {
      res.json({message: 'touched eruption_info with PUT'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })

  .post(async(req, res) => {
    try {
      res.json({message: 'touched eruption_info with POST'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      res.json({message: 'touched eruption_info with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  });

/* evidence endpoint */
router.route('/evidence')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(EvidenceController.evGet,{
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
      console.log('you touched the route!');
      res.json({message: 'touched evidence with GET'});
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(EvidenceController.evPut, {
        replacements: {
          evidence_id :req.body.evidence_id,
          method: req.body.method
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      res.json({message: 'Successfully updated Evidence'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })

  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(EvidenceController.evPost, {
        replacements: {method: req.body.method},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      res.json({message: 'touched evidence with POST'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = db.sequelizeDB.query(EvidenceController.evDelete,{
        replacements: {
          evidence_id: req.body.evidence_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      res.json({message: 'touched evidence with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  });

/* references_table endpoint */
router.route('/references_table')
  .get(async(req, res) => {
    try {
      console.log('you touched the route!');
      res.json({message: 'touched references_table with GET'});
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .put(async(req, res) => {
    try {
      res.json({message: 'touched references_table with PUT'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })

  .post(async(req, res) => {
    try {
      res.json({message: 'touched references_table with POST'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      res.json({message: 'touched references_table with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  });

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/* volcanos_has_references_table endpoint */
router.route('/volcanos_has_references_table')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(volcanosHasReferencesController.topicGet, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('you touched the route!');
      res.json(result);
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  /* TO DEBUG 
     put does not work at all due to some foreign key limition and 
     post works out of order and u have to specifiy topic_id which shouldnt happen 
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(volcanosHasReferencesController.topicPut, {
        replacements: {
          topic_id: req.body.topic_id,
          volcanos_volcano_id: req.body.volcanos_volcano_id,
          references_table_reference_id: req.body.references_table_reference_id
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      console.log('Sucessfully updated volcanos_has_references_table')
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })

  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(volcanosHasReferencesController.topicPost, {
        replacements: {
          volcanos_volcano_id: req.body.volcanos_volcano_id,
          references_table_reference_id: req.body.references_table_reference_id
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Sucessfully inserted into volcanos_has_references_table');
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  */
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(volcanosHasReferencesController.topicDelete, {
        replacements: {
          topic_id: req.body.topic_id,
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Sucessfully deleted from volcanos_has_references_table');
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  });

/* vei endpoint */
router.route('/vei')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(veiController.veiGet, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
      console.log('Received a GET HTTP method');
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(veiController.veiPut, {
        replacements: {
          vei_id: req.body.vei_id,
          vei: req.body.vei
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      console.log('Successfully updated vei')
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(veiController.veiPost, {
        replacements: {vei: req.body.vei},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully inserted into vei');
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(veiController.veiDelete, {
        replacements: {
          vei_id: req.body.vei_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Received a DELETE HTTP method');
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  });

/* volcanos endpoint */
router.route('/volcanos')
  .get(async(req, res) => {
    try {
      console.log('you touched the route!');
      res.json({message: 'touched volcanos with GET'});
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .put(async(req, res) => {
    try {
      res.json({message: 'touched volcanos with PUT'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })

  .post(async(req, res) => {
    try {
      res.json({message: 'touched volcanos with POST'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      res.json({message: 'touched volcanos with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
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

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
