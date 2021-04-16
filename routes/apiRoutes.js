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

/// /////////////////////////////////
/// ////customers Endpoints////////
/// /////////////////////////////////

// Get all database records from the Customers table
router.get('/customers', async (req, res) => {
  try {
    const customerItem = await db.customers.findAll();
    const reply = customerItem.length > 0 ? { data: customerItem} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from Customers table
router.get('/customers/:customer_id', async (req, res) => {
  try {
    const customerItem = await db.customers.findAll({
      where: {
        customer_id: req.params.customer_id
      }
    });
    res.json(customerItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////orderItems Endpoints////////
/// /////////////////////////////////

// Get all database records from the Order Items table
router.get('/orderItems', async (req, res) => {
  try {
    const orderItems = await db.orderItems.findAll();
    const reply = orderItems.length > 0 ? { data: orderItems} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from Order Items table
router.get('/orderItems/:order_item_id', async (req, res) => {
  try {
    const orderItems = await db.orderItems.findAll({
      where: {
        order_item_id: req.params.order_item_id
      }
    });
    res.json(orderItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
