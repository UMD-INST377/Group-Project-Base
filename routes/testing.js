router.route('/testing').get(async (req, res) => {
  try {
    const testQuery = 'SELECT * FROM address';
    const test = await db.sequelizeDB.query(testQuery);

    res.json(test);
  } catch (err) {
    res.json({ message: err });
  }
});
