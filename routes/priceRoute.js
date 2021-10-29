import  express  from "express";
import sequelize  from "sequelize";
import chalk from "chalk";
import fetch from "node-fetch";


import db from '../database/initializeDB.js';
 
const router=express.Router();

router.route('/price')
.get(async(req,res) =>{
    try{
        const url='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
        const data=await fetch(data);
        const json = await data.json();
        console.log(json)
        res.json({data:data});
}
    catch(err){
        console.log(error);
        res.json({error:error});}
    })

export default router;


