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
    const ordersItem = await db.orders.findAll();
    const reply = ordersItem.length > 0 ? { data: ordersItem} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from orders table
router.get('/orders/:order_id', async (req, res) => {
  try {
    const ordersItem = await db.orders.findAll({
      where: {
        order_id: req.params.order_id
      }
    });
    res.json(ordersItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
router.get('/orders/:orderMin/:orderMax', async (req, res) => {
  try {
    const ordersItem = await db.orders.findAll({
      where: {
        order_id: req.params.order_id
      }
    });
    res.json(ordersItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
/* router.get('/order/:order_id,order_id2', async (req, res) => {
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
}); */

// Add a new record to the database in orders table
router.post('/orders', async (req, res) => {
  try {
    const newOrdersItem = await db.orders.create({
      order_id: req.body.order_id,
      item_id: req.body.item_id,
      delivery_id: req.body.delivery_id,
      customer_id: req.body.customer_id
    });
    res.json(newOrdersItem);
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

/// /////////////////////////////////
/// ////Product Families Endpoints////////
/// /////////////////////////////////

// Get all database records from the families table
router.get('/productFamilies', async (req, res) => {
  try {
    const family = await db.productFamilies.findAll();
    const reply = family.length > 0 ? { data: family} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from families table
router.get('/productFamilies/:family_id', async (req, res) => {
  try {
    const family = await db.productFamilies.findAll({
      where: {
        family_id: req.params.family_id
      }
    });
    res.json(family);
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

// Add a new record to the database in families table
router.post('/productFamilies', async (req, res) => {
  try {
    const newFamily = await db.deliveries.create({
      family_id: req.body.family_id,
      family_name: req.body.family_name
    });
    res.json(newFamily);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in families table
router.put('/productFamilies', async (req, res) => {
  try {
    await db.productFamilies.update(
      {
        family_id: req.body.family_id,
        family_name: req.body.family_name
      },
      {
        where: {
          family_id: req.body.family_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual family record by id
router.delete('/productFamilies/:family_id', async (req, res) => {
  try {
    await db.productFamilies.destroy({
      where: {
        family_id: req.params.family_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////stores Endpoints/////////////
/// /////////////////////////////////

// Get all database records from the store table
router.get('/stores', async (req, res) => {
  try {
    const store = await db.stores.findAll();
    const reply = store.length > 0 ? { data: store} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from stores table
router.get('/stores/:store_id', async (req, res) => {
  try {
    const store = await db.stores.findAll({
      where: {
        store_id: req.params.store_id
      }
    });
    res.json(store);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Add a new record to the database in stores table
router.post('/stores', async (req, res) => {
  try {
    const newStore = await db.stores.create({
      store_id: req.body.store_id,
      store_address_line1: req.body.store_address_line1,
      store_city: req.body.store_city,
      store_state: req.body.store_state,
      store_zip_code: req.body.store_zip_code
    });
    res.json(newStore);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in stores table
router.put('/stores', async (req, res) => {
  try {
    await db.stores.update(
      {
        store_id: req.body.store_id,
        store_address_line1: req.body.store_address_line1,
        store_city: req.body.store_city,
        store_state: req.body.store_state,
        store_zip_code: req.body.store_zip_code
      },
      {
        where: {
          store_id: req.body.store_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual store record by id
router.delete('/stores/:store_id', async (req, res) => {
  try {
    await db.stores.destroy({
      where: {
        store_id: req.params.store_id
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

// Get all database records from the customers table
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

// Get an individual element by id from customers table
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

// Get a set of records by client query
// BROKEN NEED TO FIX
// router.get('/customers/:customersMin/:customersMax', async (req, res) => {
//   try {
//     const customerItem = await db.customers.findAll({
//       where: {
//         customer_id: req.params.customer_id
//       }
//     });
//     res.json(customerItem);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// Add a new record to the database in customers table
router.post('/customers', async (req, res) => {
  try {
    const newCustomerItem = await db.customers.create({
      customer_id: req.body.customer_id,
      restriction_type: req.body.restriction_type,
      customer_last_name: req.body.customer_last_name,
      customer_email_address: req.body.customer_email_address,
      customer_address: req.body.customer_address,
      customer_city: req.body.customer_city,
      customer_state: req.body.customer_state,
      customer_zip_code: req.body.customer_zip_code
    });
    res.json(newCustomerItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in customers table
router.put('/customers', async (req, res) => {
  try {
    await db.customers.update(
      {
        restriction_type: req.body.restriction_type,
        customer_last_name: req.body.customer_last_name,
        customer_email_address: req.body.customer_email_address,
        customer_address: req.body.customer_address,
        customer_city: req.body.customer_city,
        customer_state: req.body.customer_state,
        customer_zip_code: req.body.customer_zip_code
      },
      {
        where: {
          customer_id: req.body.customer_id
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
router.delete('/customers/:customer_id', async (req, res) => {
  try {
    await db.customers.destroy({
      where: {
        customer_id: req.params.customer_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////orderItems Endpoints/////////
/// /////////////////////////////////

// Get all database records from the order items table
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

// Get an individual element by id from order items table
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

// Get a set of records by client query
// BROKEN NEED TO FIX
// router.get('/orderItems/:orderItemsMin/:orderItemsMin', async (req, res) => {
//   try {
//     const orderItems = await db.orderItems.findAll({
//       where: {
//         order_item_id: req.params.order_item_id
//       }
//     });
//     res.json(orderItems);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// Add a new record to the database in order items table
router.post('/orderItems', async (req, res) => {
  try {
    const newOrderItems = await db.orderItems.create({
      order_item_id: req.body.order_item_id,
      order_id: req.body.order_id,
      product_id: req.body.product_id,
      item_price: req.body.item_price
    });
    res.json(newOrderItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in order items table
router.put('/orderItems', async (req, res) => {
  try {
    await db.orderItems.update(
      {
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        item_price: req.body.item_price
      },
      {
        where: {
          order_item_id: req.body.order_item_id
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
router.delete('/orderItems/:order_item_id', async (req, res) => {
  try {
    await db.orderItems.destroy({
      where: {
        order_item_id: req.body.order_item_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////products Endpoints/////////
/// /////////////////////////////////

// Get all database records from the products table
router.get('/products', async (req, res) => {
  try {
    const products = await db.products.findAll();
    const reply = products.length > 0 ? { data: products} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from products table
router.get('/products/:product_id', async (req, res) => {
  try {
    const products = await db.products.findAll({
      where: {
        product_id: req.params.product_id
      }
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
// router.get('/orderItems/:orderItemsMin/:orderItemsMin', async (req, res) => {
//   try {
//     const orderItems = await db.orderItems.findAll({
//       where: {
//         order_item_id: req.params.order_item_id
//       }
//     });
//     res.json(orderItems);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// Add a new record to the database in products table
router.post('/products', async (req, res) => {
  try {
    const newProducts = await db.products.create({
      product_id: req.body.product_id,
      product_description: req.body.product_description,
      product_color: req.body.product_color,
      product_unit_type: req.body.product_unit_type,
      family_id: req.body.family_id,
      category_id: req.body.category_id
    });
    res.json(newProducts);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in products table
router.put('/products', async (req, res) => {
  try {
    await db.products.update(
      {
        category_id: req.body.category_id,
        family_id: req.body.family_id,
        product_description: req.body.product_description
      },
      {
        where: {
          product_id: req.body.product_id
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
router.delete('/products/:product_id', async (req, res) => {
  try {
    await db.products.destroy({
      where: {
        product_id: req.body.product_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////productCategories Endpoints/////////
/// /////////////////////////////////

// Get all database records from the products table
router.get('/productCategories', async (req, res) => {
  try {
    const productCategories = await db.productCategories.findAll();
    const reply = productCategories.length > 0 ? { data: productCategories} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from products table
router.get('/productCategories/:category_id', async (req, res) => {
  try {
    const productCategories = await db.productCategories.findAll({
      where: {
        category_id: req.params.category_id
      }
    });
    res.json(productCategories);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
// router.get('/orderItems/:orderItemsMin/:orderItemsMin', async (req, res) => {
//   try {
//     const orderItems = await db.orderItems.findAll({
//       where: {
//         order_item_id: req.params.order_item_id
//       }
//     });
//     res.json(orderItems);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// Add a new record to the database in products table
router.post('/productCategories', async (req, res) => {
  try {
    const productCategories = await db.productCategories.create({
      category_id: req.body.category_id,
      category_name: req.body.category_name,
      category_description: req.body.category_description
    });
    res.json(newProducts);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in products table
router.put('/productCategories', async (req, res) => {
  try {
    await db.productCategories.update(
      {
        category_name: req.body.category_name,
        category_description: req.body.category_description
      },
      {
        where: {
          category_id: req.body.category_id
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
router.delete('/productCategories/:category_id', async (req, res) => {
  try {
    await db.productCategories.destroy({
      where: {
        category_id: req.body.category_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;