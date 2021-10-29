import express from 'express';
const router = express.Router();

router.route('/artists')
  .get((req,res) => {
    console.log('you touched /artists with GET');
    res.json({data: data});
  })

router.route('/companies')
  .get(async(req,res) => {
    try{
      console.log('you touched /companies with GET');
      res.json({data: data});
    }
    catch(err){
      console.log(err);
      res.json({error:err});
    }})
  .put(async(req,res) => {
    try{
      console.log('you touched /companies with PUT');
      res.json({data: data});
    }
    catch(err){
      console.log(err)
      res.json({error:err})
    }
    })
    .post(async(req,res) => {
      try{
        console.log('you touched /companies with POST');
        res.json({data: data});
      }
      catch(err){
        console.log(err)
        res.json({error:err})
      }
    })
    .delete(async(req,res) => {
      try{
        console.log('you touched /companies with DELETE');
        res.json({data: data});
      }
      catch(err){
        console.log(err)
        res.json({error:err})
      }
    })