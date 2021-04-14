/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();
/// /////////////////////////////////
/// ////orders Endpoints////////
/// /////////////////////////////////

// Get all database records from the Orders table
router.get('/orders', async (req, res) => {
  try {
    const orderItem = await db.orders.findAll();
    const reply = orderItem.length > 0 ? { data: orderItem} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from orders table
router.get('/orders/:order_id', async (req, res) => {
  try {
    const orderItem = await db.orders.findAll({
      where: {
        order_id: req.params.order_id
      }
    });
    res.json(orderItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
router.get('/orders/:orderMin/:orderMax', async (req, res) => {
  try {
    const orderItem = await db.orders.findAll({
      where: {
        order_id: req.params.order_id
      }
    });
    res.json(orderItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Add a new record to the database in orders table
router.post('/orders', async (req, res) => {
  try {
    const newOrderItem = await db.orders.create({
      order_id: req.body.order_id,
      item_id: req.body.item_id,
      delivery_id: req.body.delivery_id,
      customer_id: req.body.customer_id
    });
    res.json(newOrderItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in orders table

router.put('/orders', async (req, res) => {
  try {
    await db.orders.update(
      {
        item_id: req.body.item_id,
        delivery_id: req.body.delivery_id
      },
      {
        where: {
          order_id: req.body.order_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual record by id
router.delete('/orders/:order_id', async (req, res) => {
  try {
    await db.orders.destroy({
      where: {
        order_id: req.params.order_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////deliveries Endpoints////////
/// /////////////////////////////////

// Get all database records from the delivery table
router.get('/deliveries', async (req, res) => {
  try {
    const deliveryItem = await db.deliveries.findAll();
    const reply = deliveryItem.length > 0 ? { data: deliveryItem} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from deliveries table
router.get('/deliveries/:delivery_id', async (req, res) => {
  try {
    const deliveryItem = await db.deliveries.findAll({
      where: {
        delivery_id: req.params.delivery_id
      }
    });
    res.json(deliveryItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
// router.get('/orders/:orderMin/:orderMax', async (req, res) => {
//   try {
//     const orderItem = await db.orders.findAll({
//       where: {
//         order_id: req.params.order_id
//       }
//     });
//     res.json(orderItem);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// Add a new record to the database in deliveries table
router.post('/deliveries', async (req, res) => {
  try {
    const newDeliveryItem = await db.deliveries.create({
      delivery_id: req.body.delivery_id,
      customer_address: req.body.customer_address,
      stores_store_id: req.body.stores_store_id,
      customer_id: req.body.customer_id
    });
    res.json(newDeliveryItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in deliveries table
router.put('/deliveries', async (req, res) => {
  try {
    await db.deliveries.update(
      {
        customer_address: req.body.customer_address,
        stores_store_id: req.body.stores_store_id,
        customer_id: req.body.customer_id
      },
      {
        where: {
          delivery_id: req.body.delivery_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual record by id
router.delete('/deliveries/:delivery_id', async (req, res) => {
  try {
    await db.deliveries.destroy({
      where: {
        delivery_id: req.params.delivery_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;
