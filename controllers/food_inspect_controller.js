/* eslint-disable spaced-comment */
/* eslint-disable indent */
async function getAllRes(req, res, next) {
    const halls = await db.DiningHall.findAll();
    const currentId = (await halls.length) + 1;
    try {
      const newDining = await db.DiningHall.create({
        hall_id: currentId,
        hall_name: req.body.hall_name,
        hall_address: req.body.hall_address,
        hall_lat: req.body.hall_lat,
        hall_long: req.body.hall_long
      });
      res.json(newDining);
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  }
  
  export {
    getAllHalls
  };
  
