import { Router } from "express";

router.route('/artists')
  .get((req,res) => {
    console.log('you touched /artists with GET');
    res.json({data: data});
  })