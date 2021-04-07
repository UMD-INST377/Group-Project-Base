/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();
/// /////////////////////////////////
/// ////orders Endpoints////////
/// /////////////////////////////////

// Get all database records from the Orders table
router.get('/order', async (req, res) => {
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
router.get('/order/:order_id', async (req, res) => {
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
router.post('/order', async (req, res) => {
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

router.put('/order', async (req, res) => {
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
router.delete('/order/:order_id', async (req, res) => {
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

export default router;
