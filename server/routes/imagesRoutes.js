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
    let imageURL = req.body.image_url;
    if (validator.isURL(imageURL)
      && ['jpg', 'png', 'jpeg', 'img', 'flixster'].some((str) => imageURL.includes(str))) {
      try {
        if (!imageURL.includes('http')) {
          imageURL = `https://${imageURL}`;
        }
        await db.Images.create({
          image_id: currentId,
          image_url: imageURL
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
  })
  .put(async (req, res) => {
    let imageURL = req.body.image_url;
    if (validator.isURL(imageURL)
      && ['jpg', 'png', 'jpeg', 'img', 'flixster'].some((str) => imageURL.includes(str))) {
      try {
        if (!imageURL.includes('http')) {
          imageURL = `https://${imageURL}`;
        }
        await db.Images.update(
          {
            image_url: imageURL
          },
          {
            where: {
              image_id: req.params.image_id
            }
          }
        );
        res.send('Successfully updated');
      } catch (err) {
        res.send('Record does not exist');
      }
    } else {
      res.send('Please enter a valid image URL ending in .jpg, .png, or .jpeg');
    }
  })
  .delete(async (req, res) => {
    try {
      await db.Images.destroy({
        where: {
          image_id: req.params.image_id
        }
      });
      res.send('Successfully deleted');
    } catch (err) {
      res.error('Could not delete record -- please check ID');
    }
  });

export default router;