/* eslint-disable max-len */
import db from '../database/initializeDB.js';
import queries from '../queries/index.js';

/*
    ## What is this file?
    This is a list of functions called "controllers"
    Controllers do just that: when they're called, they control what data gets requested,
    handle some errors, and reply to the request.

    ## Requests, responses, and error handling
    It's very important that they have a "req" - the HTTP request, and a "res" - the HTTP response.
    If those do not exist, the request will "hang" and never complete.

    It is also important that they handle errors by telling the request what happened and where.
    In this case, a message will be sent to the client saying that there was an error.

    This is different than a 404 error, which is when the internet cannot find a page it is looking for.

    Instead, the request will complete, by sending the message about the error.

    This means that the client will still know something has happened.

    If the request "drops," a good client will instead show a different type of error message,
    such as when Insta says "cannot load images" rather than just breaking.
*/

async function sqlRouteGetAll(req, res) {
  try {
    // these two print statements will show that your controller has been accessed
    // and confirm that your SQL query is what you think it is
    console.log('Touched sqlDemo get');
    console.log('Check SQL query', queries.meals);

    /*  Here, we use an asynchronous function
    - a function that might take a minute to resolve, because databases are slow
    */
    const result = await db.mysqlDB.query(queries.meals, async (error, results, fields) => {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });

    res.json({ data: result });
  } catch (error) {
    console.log('sqlDemo get error', error);
    res.json({ message: 'error in sqlDemo' });
  }
}

async function sqlRoutePost(req, res) {
  // TODO: we need to demonstrate hooking this to a form
  try {
    // console.dir(req.body, { depth: null }); // Checking that we have a body at all!
    // console.log(req.body?.category); // Optionally checking for the dining value on body object
    // const mealCategory = req.body?.category || 0;
    // const result = await db.sequelizeDB.query(queries.meals, {
    //   replacements: { meal_category: mealCategory },
    //   type: sequelize.QueryTypes.SELECT
    // });
    res.json({ data: result });
  } catch (err) {
    console.log(err);
    res.send({ message: err });
  }
}

export default {
  sqlRouteGet: sqlRouteGetAll
  // sqlRoutePost: sqlRoutePost
};
