/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Airbnb Data API!');
});

/// /////////////////////////////////
/// ////Calendar Endpoints////////
/// /////////////////////////////////
router.get('/calendar', async (req, res) => {
  try {
    const entries = await db.calendar.findAll();
    const reply = entries.length > 0 ? { data: entries } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.get('/calendar/:calendar_id', async (req, res) => {
  try {
    const entry = await db.calendar.findAll({
      where: {
        calendar_id: req.params.calendar_id
      }
    });

    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.post('/calendar', async (req, res) => {
  const entries = await db.calendar.findAll();
  const currentId = (await entries.length) + 1;
  try {
    const newEntry = await db.calendar.create({
      calendar_id: currentId,
      listing_id: req.body.listing_id,
      stay_date: req.body.stay_date,
      availability: req.body.availability,
      price: req.body.price,
      min_nights: req.body.min_nights,
      max_nights: req.body.max_nights
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.delete('/calendar/:calendar_id', async (req, res) => {
  try {
    await db.calendar.destroy({
      where: {
        calendar_id: req.params.calendar_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.put('/calendar', async (req, res) => {
  try {
    await db.calendar.update(
      {
        stay_date: req.body.stay_date,
        availability: req.body.availability,
        price: req.body.price,
        min_nights: req.body.min_nights,
        max_nights: req.body.max_nights
      },
      {
        where: {
          calendar_id: req.body.calendar_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

/// /////////////////////////////////
/// ////////Hosts Endpoints//////////
/// /////////////////////////////////
router.get('/hosts', async (req, res) => {
  try {
    const hosts = await db.hosts.findAll();
    res.json(hosts);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.get('/hosts/:host_id', async (req, res) => {
  try {
    const hosts = await db.hosts.findAll({
      where: {
        host_id: req.params.host_id
      }
    });
    res.json(hosts);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.post('/hosts', async (req, res) => {
  const hosts = await db.hosts.findAll();
  const currentId = (await hosts.length) + 1;
  try {
    const newEntry = await db.hosts.create({
      host_id: currentId,
      host_name: req.body.host_name,
      host_start_date: req.body.host_start_date,
      host_location: req.body.host_location,
      host_response_time: req.body.host_response_time,
      host_response_rate: req.body.host_response_rate
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.delete('/hosts/:host_id', async (req, res) => {
  try {
    await db.hosts.destroy({
      where: {
        host_id: req.params.host_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.put('/hosts', async (req, res) => {
  try {
    await db.hosts.update(
      {
        host_name: req.body.host_name,
        host_start_date: req.body.host_start_date,
        host_location: req.body.host_location,
        host_response_time: req.body.host_response_time,
        host_response_rate: req.body.host_response_rate
      },
      {
        where: {
          host_id: req.body.host_id
        }
      }
    );
    res.send('Host Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

/// /////////////////////////////////
/// ////////Listings Endpoints/////////
/// /////////////////////////////////
router.get('/listings', async (req, res) => {
  try {
    const listings = await db.listings.findAll();
    res.send(listings);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.get('/listings/:listing_id', async (req, res) => {
  try {
    const listings = await db.listings.findAll({
      where: {
        listing_id: req.params.listing_id
      }
    });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.post('/listings', async (req, res) => {
  const listings = await db.listings.findAll();
  const currentId = (await listings.length) + 1;
  try {
    const newEntry = await db.listings.create({
      listing_id: currentId,
      neighborhood_id: req.body.neighborhood_id,
      host_id: req.body.host_id,
      listing_url: req.body.listing_url,
      listing_name: req.body.listing_name,
      days_avail: req.body.days_avail,
      price: req.body.price
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.delete('/listings/:listing_id', async (req, res) => {
  try {
    await db.listings.destroy({
      where: {
        listing_id: req.params.listing_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.put('/listings', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Listings.update(
      {
        listing_url: req.body.listing_url,
        listing_name: req.body.listing_name,
        days_avail: req.body.days_avail,
        price: req.body.price
      },
      {
        where: {
          listing_id: req.body.listing_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

/// /////////////////////////////////
/// Neighborhoods Endpoints///
/// /////////////////////////////////
router.get('/neighborhoods', async (req, res) => {
  try {
    const neighborhoods = await db.neighborhoods.findAll();
    res.json(neighborhoods);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.get('/neighborhoods/:neighborhood_id', async (req, res) => {
  try {
    const neighborhoods = await db.neighborhoods.findAll({
      where: {
        neighborhood_id: req.params.neighborhood_id
      }
    });
    res.json(neighborhoods);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.post('/neighborhoods', async (req, res) => {
  const neighborhoods = await db.neighborhoods.findAll();
  const currentId = (await neighborhoods.length) + 1;
  try {
    const newEntry = await db.listings.create({
      neighborhood_id: currentId,
      neighborhood_name: req.body.neighborhood_name
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.delete('/neighborhoods/:neighborhood_id', async (req, res) => {
  try {
    await db.neighborhoods.destroy({
      where: {
        neighborhood_id: req.params.neighborhood_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.put('/neighborhoods', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.neighborhoods.update(
      {
        neighborhood_name: req.body.neighborhood_name
      },
      {
        where: {
          neighborhood_id: req.body.neighborhood_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

/// /////////////////////////////////
/// Properties Endpoints///
/// /////////////////////////////////
router.get('/properties', async (req, res) => {
  try {
    const properties = await db.properties.findAll();
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.get('/properties/:property_id', async (req, res) => {
  try {
    const properties = await db.properties.findAll({
      where: {
        property_id: req.params.property_id
      }
    });
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.post('/properties', async (req, res) => {
  const properties = await db.properties.findAll();
  const currentId = (await properties.length) + 1;
  try {
    const newEntry = await db.listings.create({
      property_id: currentId,
      listing_id: req.body.listing_id,
      property_type: req.body.property_type,
      room_type: req.body.room_type,
      accommodates: req.body.accommodates,
      bathrooms: req.body.bathrooms,
      bedrooms: req.body.bedrooms,
      beds: req.body.beds
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.delete('/properties/:property_id', async (req, res) => {
  try {
    await db.properties.destroy({
      where: {
        property_id: req.params.property_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.put('/properties', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.properties.update(
      {
        property_type: req.body.property_type,
        room_type: req.body.room_type,
        accommodates: req.body.accommodates,
        bathrooms: req.body.bathrooms,
        bedrooms: req.body.bedrooms,
        beds: req.body.beds
      },
      {
        where: {
          property_id: req.body.property_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

/// /////////////////////////////////
/// Reviews Endpoints///
/// /////////////////////////////////
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await db.reviews.findAll();
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.get('/reviews/:review_id', async (req, res) => {
  try {
    const reviews = await db.reviews.findAll({
      where: {
        review_id: req.params.review_id
      }
    });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.post('/reviews', async (req, res) => {
  const reviews = await db.properties.findAll();
  const currentId = (await reviews.length) + 1;
  try {
    const newEntry = await db.listings.create({
      review_id: currentId,
      listing_id: req.body.listing_id,
      host_id: req.body.host_id,
      reviewer_name: req.body.reviewer_name,
      review_date: req.body.review_date,
      review_text: req.body.review_text
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.delete('/reviews/:review_id', async (req, res) => {
  try {
    await db.reviews.destroy({
      where: {
        review_id: req.params.review_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.put('/reviews', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.properties.update(
      {
        reviewer_name: req.body.reviewer_name,
        review_date: req.body.review_date,
        review_text: req.body.review_text
      },
      {
        where: {
          review_id: req.body.review_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

/// /////////////////////////////////
/// Scores Endpoints///
/// /////////////////////////////////
router.get('/scores', async (req, res) => {
  try {
    const scores = await db.scores.findAll();
    res.json(scores);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.get('/scores/:scores_id', async (req, res) => {
  try {
    const scores = await db.scores.findAll({
      where: {
        scores_id: req.params.scores_id
      }
    });
    res.json(scores);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.post('/scores', async (req, res) => {
  const scores = await db.scores.findAll();
  const currentId = (await scores.length) + 1;
  try {
    const newEntry = await db.scores.create({
      scores_id: currentId,
      listing_id: req.body.listing_id,
      overall_rating: req.body.overall_rating,
      cleanliness_rating: req.body.cleanliness_rating,
      check_in_rating: req.body.check_in_rating,
      communication_rating: req.body.communication_rating,
      location_rating: req.body.location_rating,
      value_rating: req.body.value_rating
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.delete('/scores/:score_id', async (req, res) => {
  try {
    await db.scores.destroy({
      where: {
        scores_id: req.params.scores_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

router.put('/scores', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.properties.update(
      {
        overall_rating: req.body.overall_rating,
        cleanliness_rating: req.body.cleanliness_rating,
        check_in_rating: req.body.check_in_rating,
        communication_rating: req.body.communication_rating,
        location_rating: req.body.location_rating,
        value_rating: req.body.value_rating
      },
      {
        where: {
          scores_id: req.body.scores_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

/// /////////////////////////////////
/// Get All Records Endpoint///
/// /////////////////////////////////
const allRecords = `SELECT *
FROM
  listings l
JOIN calendar c 
  ON l.listing_id = c.listing_id
JOIN hosts h
  ON l.host_id = h.host_id
JOIN neighborhoods n
  ON l.neighborhood_id = n.neighborhood_id
JOIN properties p
  ON l.listing_id = p.listing_id
JOIN reviews r
  ON l.listing_id = r.listing_id
JOIN scores s
  ON l.listing_id = s.listing_id;`;
router.get('/allrecords', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(allRecords, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${err.parent.code} ${err.parent.sqlMessage}`);
  }
});

export default router;
