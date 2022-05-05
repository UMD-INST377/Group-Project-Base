//NEW CODE BELOW//
function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + min);
}
function restoArrayMake(dataArray) {
    // console.log('fired dataHandler');
    // console.table(dataArray); // this is called "dot notation"
    const range = [...Array(15).keys()];
    const listItems = range.map((item, index) => {
        const restNum = getRandomIntInclusive(0, dataArray.length - 1);
        return dataArray[restNum];
    });

    // console.log(listItems);
    return listItems;
}
    const targetList = document.querySelector('.resto-list');
    targetList.innerHTML = '';
    collection.forEach((item) => {
        const { restaurant_name } = item;
        const displayName = restaurant_name.toLowerCase();
        const injectThisItem = `<li>${displayName}</li>`;
        targetList.innerHTML += injectThisItem;
    });
   
}
async function mainEvent() {
    // the async keyword means we can make API requests
    console.log(document.querySelector('.mainform'));
    const form = document.querySelector('.mainform');
    const submit = document.querySelector('.button');
    const address_1 = document.querySelector('#NewAddress');
    // const zipcode = document.querySelector('#zipcode');
    submit.style.display = 'none';

    const results = await fetch('/ethan/address'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    console.log(arrayFromJson);
    if (arrayFromJson.length > 0) {
        submit.style.display = 'block';
        //let currentArray = [];
        let currentArray = arrayFromJson;
        console.log(currentArray.length)
        address_1.addEventListener('input', async (event) => {
            console.log(currentArray.length);
            if (currentArray.length === 0) {
                return;
            }
            console.log(event.target.value.toLowerCase())
            const selectResto = currentArray.filter((item) => {
                console.log(item.address_1)
                const lowerName = item.address_1.toLowerCase();
                const lowerValue = event.target.value.toLowerCase();
                return lowerName.includes(lowerValue);
            });

        console.log(selectResto);
            createHtmlList(selectResto);
        });
        form.addEventListener('submit', async (submitEvent) => {
            // async has to be declared all the way to get an await
            submitEvent.preventDefault(); // This prevents your page from refreshing!
            // console.log('form submission'); // this is substituting for a "breakpoint"
            // arrayFromJson.data - we're accessing a key called 'data' on the returned object
            // it contains all 1,000 records we need
            currentArray = restoArrayMake(arrayFromJson.data);
            console.log(currentArray);
            createHtmlList(currentArray);
        });
    }
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent())
/* eslint-disable no-console */


import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

const addressQuery = 'SELECT * FROM restaurants LEFT JOIN address using (restaurant_id)';

router.route('/address').get(async (req, res) => {
  try {
    const address = await db.sequelizeDB.query(addressQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(address);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});
From Ethan Trong-Khang Do to Everyone 09:47 PM
// get address with id, /api/addressid#
router.get('/:address_id', async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const addressIDQuery = `SELECT * FROM address WHERE address_id = ${req.params.address_id}`;
  try {
    const address = await db.sequelizeDB.query(addressIDQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(address);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});
// post method for address for adding a address
router.post('/addresspost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO address (address_id, 
      address_1, address_2, city, state, zip_code, restaurant_id)
      values(${req.body.address_id}, '${req.body.address_1}', '${req.body.address_2}', '${req.body.city}',
      '${req.body.state}', '${req.body.zip_code}', ${req.body.restaurant_id})`
    );
    res.send('Something was added.');
  } catch (err) {
    console.log(err);
    res.send({message: err})
  }
});
From Ethan Trong-Khang Do to Everyone 09:47 PM
});
///ENDPOINTS
