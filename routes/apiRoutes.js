import { Router } from "express";

router.route('/artists')
  .get((req,res) => {
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


