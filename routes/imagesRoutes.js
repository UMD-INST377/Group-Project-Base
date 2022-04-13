import express from 'express';
import validator from 'validator';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const images = await db.Images.findAll();
      const reply = images.length > 0 ? { data: images } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      res.json('Server error');
    }
  })
  .post(async (req, res) => {
    const images = await db.Images.findAll();
    const currentId = (await images.length) + 1;
    const imageURL = req.body.image_url;
    if (validator.isURL(imageURL)
      && ['jpg', 'png', 'jpeg', 'img', 'flixster'].some((str) => imageURL.includes(str))) {
      try {
        await db.Images.create({
          image_id: currentId,
          image_url: req.body.image_url
        });
        res.send('Successfully added');
      } catch (err) {
        res.send('Server error');
      }
    } else {
      res.send('Please enter a valid image URL ending in .jpg, .png, or .jpeg');
    }
  });

router.route('/:image_id')
  .get(async (req, res) => {
    try {
      const image = await db.Images.findAll({
        where: {
          image_id: req.params.image_id
        }
      });
      res.json(image);
    } catch (err) {
      res.json('Server error');
    }
  });

export default router;