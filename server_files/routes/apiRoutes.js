/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

import aoaController from '../server/controllers/aoaController.js';
import volcanosController from '../server/controllers/volcanosController.js';
import EvidenceController from '../server/controllers/EvidenceController.js';
import volcanosHasReferencesController from '../server/controllers/volcanosHasReferencesController.js';
import eruptionCategoryController from '../server/controllers/eruptionCategoryController.js';
import veiController from '../server/controllers/veiController.js';
import infoController from '../server/controllers/infoController.js';
import eruptionFrequency from '../server/controllers/eruptionFrequency.js';
import category_frequency from '../server/controllers/category_frequency.js';

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
      const result = await db.sequelizeDB.query(infoController.infoGet, {
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
      const result = await db.sequelizeDB.query(infoController.infoPut, {
        replacements: {
          eruption_id: req.body.eruption_id,
          eruption_number: req.body.eruption_number,
          year: req.body.year,
          month: req.body.month,
          day: req.body.day,
          volcano_id: req.body.volcano_id,
          aoa_id: req.body.aoa_id,
          vei_id: req.body.vei_id,
          evidence_id: req.body.evidence_id,
          category_id: req.body.category_id,
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      console.log('Successfully updated eruption_info')
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(infoController.infoPost, {
        replacements: {
          eruption_number: req.body.eruption_number,
          year: req.body.year,
          month: req.body.month,
          day: req.body.day,
          volcano_id: req.body.volcano_id,
          aoa_id: req.body.aoa_id,
          vei_id: req.body.vei_id,
          evidence_id: req.body.evidence_id,
          category_id: req.body.category_id,
        },
        type: sequelize.QueryTypes.INSERT
      });
      console.log('Successfully inserted eruption_info')
      res.json(result);
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(infoController.infoDelete, {
        replacements: {
          eruption_id: req.body.eruption_id,
        },
        type: sequelize.QueryTypes.DELETE
      });
      console.log('Successfully deleted from eruption_info')
      res.json(result);
    } catch (err) {
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
  /* Does not work due to some compatibility issues in SQL, 
    but not necessary for the project since this table is primarily for references 
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
      const result = await db.sequelizeDB.query(volcanosController.volcanosGet, {
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
      const result = await db.sequelizeDB.query(volcanosController.volcanosPut, {
        replacements: {
          volcano_id: req.body.volcano_id,
          volcano_name: req.body.volcano_name,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          volcano_number: req.body.volcano_number
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      console.log('Successfully updated volcanos')
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  })

  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(volcanosController.volcanosPost, {
        replacements: {
          volcano_name: req.body.volcano_name,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          volcano_number: req.body.volcano_number
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully inserted in volcanos');
    } catch (err) {
      console.log(err);
      res.json({err: 'something went wrong!'});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(volcanosController.volcanosGet, {
        replacements: {
          volcano_id: req.body.volcano_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Successfully deleted from volcanos')
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong!'});
    }
  });

//   /* eruption_aoa endpoint */
// router.route('/eruption_aoa')
// .get(async(req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(aoaController.aoaGet, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     console.log('you touched the route!');
//     res.json(result);
//   } catch (err) {
//     res.json({error: 'something went wrong!'});
//   }
// })
// .put(async(req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(aoaController.aoaPut, {
//       replacements: {
//         aoa_id: req.body.aoa_id,
//         aoa: req.body.aoa
//       },
//       type: sequelize.QueryTypes.UPDATE
//     });
//     res.json(result);
//     console.log('Successfully updated eruption_aoa')
//   } catch (err) {
//     res.json({error: 'something went wrong!'});
//   }
// })
// .post(async(req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(aoaController.aoaPost, {
//       replacements: {aoa: req.body.aoa},
//       type: sequelize.QueryTypes.INSERT
//     });
//     res.json(result);
//     console.log('Successfully inserted into eruption_aoa')
//   } catch (err) {
//     res.json({error: 'something went wrong!'});
//   }
// })
// .delete(async(req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(aoaController.aoaDelete, {
//       replacements: {
//         aoa_id: req.body.aoa_id
//       },
//       type: sequelize.QueryTypes.DELETE
//     });
//     res.json(result);
//     console.log('Successfully deleted from eruption_aoa')
//   } catch (err) {
//     res.json({error: 'something went wrong!'});
//   }
// });

// endpoints for charts
router.route('/eruption_freq')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(eruptionFrequency.frequencyGet, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('you touched the route!');
      res.json(result);
    } catch (err) {
      res.json({error: 'something went wrong!'});
    }
  });

router.route('/category_freq')
.get(async(req, res) => {
  try {
    const result = await db.sequelizeDB.query(category_frequency.freqGet, {
      type: sequelize.QueryTypes.SELECT
    });
    console.log('you touched the route!');
    res.json(result);
  } catch (err) {
    res.json({error: 'something went wrong!'});
  }
});

  export default router;