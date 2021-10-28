import { Router } from "express";

router.route('/   ')
  .get((req,res) => {
    console.log('you touched the demo route');
    res.json({data: data});
  })