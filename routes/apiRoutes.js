import express from 'express';
const router = express.Router();

router.route('/artists')
  try{
      console.log('you touched /artists with GET');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong'});
    }
  })

  .put((req, res) => {
    try{console.log('you touched /companies with PUT');
    res.json({data: data});}
    catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })

  .post((req, res) => {
    try{
      console.log('you touched /companies with POST');
      res.json({data: data});}
    catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })

  .delete((req, res) => {
    try{
      console.log('you touched /companies with DELETE');
      res.json({data: data});
    }
    catch (err) {
      console.log(error);
      res.json({error: error});
    }
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

