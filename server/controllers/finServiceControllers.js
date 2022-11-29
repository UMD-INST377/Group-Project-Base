/*
    This file presently has no external dependencies
    It simply 'handles' requests and closes those loops
    Even that could probably be simplified with a functional error handler
*/

function handlePostRequest(req, res) {
  try {
    console.log('Touched post endpoint', req.body);
    console.log(req.body?.resto);
    res.json({ message: 'post FoodServices endpoint' });
  } catch (err) {
    console.log(error);
    res.json({ error: 'Something went wrong on the server' });
  }
}

function handlePutRequest(req, res) {
  try {
    console.log('Touched put endpoint', req.body);
    res.json({ message: 'Put FoodServices endpoint' });
  } catch (err) {
    console.log(error);
    res.json({ message: 'Something went wrong in the Put endpoint', error: err });
  }
}

function handleDeleteRequest(req, res) {
  try {
    console.log('Touched delete endpoint', req.body);
    res.json({ message: 'Delete FoodServices endpoint' });
  } catch (err) {
    console.log(error);
    res.json({ message: 'Something went wrong in the Delete endpoint', error: err });
  }
}

export default {
  handlePostRequest: handlePostRequest,
  handlePutRequest: handlePutRequest,
  handleDeleteRequest: handleDeleteRequest
};
