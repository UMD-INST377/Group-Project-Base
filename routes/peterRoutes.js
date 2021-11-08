/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import hierarchy from '../server/models/peterController.js';

const router = express.Router();

/// /////////////////////////////////
/// ////Animals Database - Hierarchy - Peter Andrade ///
/// /////////////////////////////////

router.route('/hierarchy')
.get(async (req, res) => {
  try {
    const hierarchy = await db.Hierarchy.findAll();
    const reply = hierarchy.length > 0 ? { data: hierarchy } : { message: 'no results found' };
    console.log('touched /hierarchy with GET');
    res.json(reply);
  } catch (err) {
    console.error(error);
    res.error('Server error');
  }
})

.put(async (req, res) => {
  try {
    await db.Hierarchy.update(
      {
        class: req.body.class,
        phylum: req.body.phylum,
      },
      {
        where: {
          hierarchy_id: req.body.hierarchy_id,
        },
      }
    );
    console.log('touched /hierarchy with PUT');
    res.send('Successfully updated');
  } catch (err) {
    console.error(error);
    res.error('Server error');
  }
})

.post(async (req, res) => {
  const hierarchy = await db.Hierarchy.findAll();
  const currentId = (await hierarchy.length) + 1;
  try {
    const newHierarchy = await db.Hierarchy.create({
      hierarchy_id: currentId,
      class: req.body.class,
      phylum: req.body.phylum,
    });

    console.log('touched /hierarchy with POST');
    res.json(newHierarchy);
  } catch (err) {
    console.error(error);
    res.error('Server error');
  }
})

.delete(async (req, res) => {
  try {
    await db.Hierarchy.destroy({
      where: {
        hierarchy_id: req.params.hierarchy_id,
      },
    });
    console.log('touched /hierarchy with DELETE');
    res.send('Successfully deleted');
  } catch (err) {
    console.error(error);
    res.error('Server error');
  }
});

export default router;
