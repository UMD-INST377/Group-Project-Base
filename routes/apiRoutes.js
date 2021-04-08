/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Animal Adoption API!');
});

/// /////////////////////////////////
/// ////Shelter Endpoints////////
/// /////////////////////////////////
router.get('/shelters', async (req, res) => {
  try {
    const shelters = await db.Shelters.findAll();
    const reply = shelters.length > 0 ? { data: shelters } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/shelters/:shelter_id', async (req, res) => {
  try {
    const shelters = await db.Shelters.findAll({
      where: {
        shelter_id: req.params.shelter_id
      }
    });

    res.json(shelters);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/shelters', async (req, res) => {
  const shelters = await db.Shelters.findAll();
  const currentId = (await shelters.length) + 1;
  try {
    const newShelters = await db.Shelters.create({
      shelter_id: currentId,
      shelter_name: req.body.shelter_name,
      shelter_address: req.body.shelter_address,
      phone_number: req.body.phone_number,
      num_employees: req.body.num_employees
    });
    res.json(newShelters);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/adoption/:shelter_id', async (req, res) => {
  try {
    await db.Shelters.destroy({
      where: {
        shelter_id: req.params.shelter_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/adoption', async (req, res) => {
  try {
    await db.Shelters.update(
      {
        shelter_name: req.body.shelter_name,
        shelter_address: req.body.shelter_address,
        phone_number: req.body.phone_number,
        num_employees: req.body.num_employees
      },
      {
        where: {
          shelter_id: req.body.shelter_id
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
/// ////////Animals Endpoints//////////
/// /////////////////////////////////
router.get('/animals', async (req, res) => {
  try {
    const animals = await db.Animals.findAll();
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/animals/:animal_id', async (req, res) => {
  try {
    const animals = await db.Animals.findAll({
      where: {
        animal_id: req.params.animal_id
      }
    });
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/animals', async (req, res) => {
  try {
    await db.Animals.update(
      {
        name: req.body.name,
        status: req.body.status,
        gender: req.body.gender,
        Animal_type_species_id: req.body.Animal_type_species_id,

      },
      {
        where: {
          animal_id: req.body.animal_id
        }
      }
    );
    res.send('Animal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Applicants Endpoints/////////
/// /////////////////////////////////
router.get('/applicants', async (req, res) => {
  try {
    const applicants = await db.Applicants.findAll();
    res.send(applicants);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/applicants/:applicant_id', async (req, res) => {
  try {
    const applicants = await db.Applicants.findAll({
      where: {
        applicant_id: req.params.applicant_id
      }
    });
    res.json(applicants);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/applicants', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Applicants.update(
      {
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        phone_number: req.body.phone_number,
        age: req.body.age
      },
      {
        where: {
          applicant_id: req.body.applicant_id
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
/// Pending Adoptions Endpoints///
/// /////////////////////////////////
router.get('/pending', async (req, res) => {
  try {
    const pending = await db.PendingAdoptions.findAll();
    res.json(pending);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/pending/:adopt_id', async (req, res) => {
  try {
    const pending = await db.PendingAdoptions.findAll({
      where: {
        adopt_id: req.params.adopt_id
      }
    });
    res.json(pending);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Animal Types Endpoints///
/// /////////////////////////////////
router.get('/types', async (req, res) => {
  try {
    const types = await db.AnimalType.findAll();
    res.json(types);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/types/:species_id', async (req, res) => {
  try {
    const types = await db.AnimalType.findAll({
      where: {
        species_id: req.params.species_id
      }
    });
    res.json(types);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


/// /////////////////////////////////
/// Employees Endpoints///
/// /////////////////////////////////
router.get('/employees', async (req, res) => {
  try {
    const employees = await db.Employees.findAll();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/employees/:employee_id', async (req, res) => {
  try {
    const employees = await db.Employees.findAll({
      where: {
        employee_id: req.params.employee_id
      }
    });
    res.json(employee_id);
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
