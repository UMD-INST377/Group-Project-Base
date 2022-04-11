import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Touched danielRoutes')
    res.json({message:'Welcome to the Group 18 API!'})
});

router.route('/artist')
.get(async (req, res) => {
    try {
        const artistList = await db.artist.findAll()
        res.json({data: artistList});
    } catch (err) {
        console.error(err);
        res.send({message: 'Error!'})
    }
})

router.route('/artist/:id')
.get(async (req, res) => {
    try {
        const {id} = req.params;
        const genreList = await db.artist.findAll();
        res.json({data: artistList[id]});
    } catch (err) {
        console.error(err):
        res.json({message: 'Error!'})
    }
})

export default router;