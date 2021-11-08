import getSongs from '../client/controllers/getSongs.js';

export default router.route('/songs')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(getSongs, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched songs with GET');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  });