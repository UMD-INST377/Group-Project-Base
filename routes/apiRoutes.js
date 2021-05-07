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

router.put('/shelters', async (req, res) => {
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
        Animal_type_species_id: req.body.Animal_type_species_id
      },
      {
        where: {
          animal_id: req.body.animal_id
        }
      }
    );
    res.json({update: req.body.animal_name});
  } catch (err) {
    console.error(err);
    res.json('Server error');
  }
});

router.post('/animals', async (req, res) => {
  const animals = await db.Animals.findAll();
  const currentId = (await animals.length) + 1;
  try {
    const newAnimals = await db.Animals.create({
      animal_id: currentId,
      name: req.body.name,
      status: req.body.status,
      gender: req.body.gender,
      Animal_type_species_id: req.body.Animal_type_species_id
    });
    res.json(newAnimals);
  } catch (err) {
    console.error(err);
    res.json('Server error');
  }
});

router.delete('/animals', async (req, res) => {
  try {
    await db.Animals.destroy({
      where: {
        animal_id: req.params.animal_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.json('Server error');
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
        age: req.body.age,
        email_address: req.body.email_address
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

router.post('/applicants', async (req, res) => {
  const applicants = await db.Applicants.findAll();
  const currentId = (await applicants.length) + 1;
  try {
    const newApplicants = await db.Applicants.create({
      applicant_id: currentId,
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      age: req.body.age,
      email_address: req.body.email_address,
      phone_number: req.body.phone_number
    });
    res.json(newApplicants);
  } catch (err) {
    console.error(err);
    res.json('Server error');
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
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Websites Endpoints///
/// /////////////////////////////////
router.get('/websites', async (req, res) => {
  try {
    const websites = await db.Websites.findAll();
    res.json(websites);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/websites/:website_id', async (req, res) => {
  try {
    const websites = await db.Websites.findAll({
      where: {
        website_id: req.params.website_id
      }
    });
    res.json(websites);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const applicantMapCustom = `SELECT CONCAT(first_name, " ", last_name) AS app_name,
  name,
  applicant_id,
  start_date,
  end_hold_date
FROM
  pending_adoptions p
INNER JOIN applicants a 
  ON a.applicant_id = p.Applicants_applicant_id
INNER JOIN animals m 
  ON m.animal_id = p.Animals_animal_id`;
router.get('/applicantMapCustom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(applicantMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const speciesMapCustom = `SELECT name,
  status,
  gender,
  species_name
FROM
  animals a
INNER JOIN animal_type t 
  ON a.Animal_type_species_id = t.species_id`;
router.get('/speciesMapCustom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(speciesMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const employeeMapCustom = `SELECT CONCAT(last_name, " ", first_name) AS name,
  e.phone_number,
  age,
  employee_type,
  shelter_name
FROM
  employees e
INNER JOIN shelters s 
  ON e.Shelters_shelter_id = s.shelter_id`;
router.get('/employeeMapCustom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(employeeMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const websiteMapCustom = `SELECT website_name,
  shelter_name
FROM
  websites w
INNER JOIN shelters s 
  ON w.Shelters_shelter_id = s.shelter_id`;
router.get('/websiteMapCustom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(websiteMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;