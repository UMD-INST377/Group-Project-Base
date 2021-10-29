import  express  from "express";
import sequelize  from "sequelize";
import chalk from "chalk";
import fetch from "node-fetch";


import db from '../database/initializeDB.js';
 
const router=express.Router();

router.route('/price')
.get(async(req,res) =>{
    try{
        // const url='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
        // const data=await fetch(data);
        // const json = await data.json();
        // console.log(json)
        // res.json({data:data});
        res.json({message:"touched /price with GET"});
        
}
    catch(err){
        console.log(error);
        res.json({error:"Something went wrong"});
    }
    })
    .put((req,res) =>{
        try{
            res.json({message:"touched /price with PUT"});
        }
        catch(error){
            console.log(error);
            res.json({error:"Something went wrong"});
        }
    })
    .post((req,res) =>{
        try{
            res.json({message:"touched /price with POST"});
        
        }
        catch(error){
            console.log(error);
            res.json({error:"Something went wrong"});
        }
    })
    .delete((req,res) =>{
        try{
            res.json({message:"touched /price with DELETE"});
        }
        catch(error){
            console.log(error);
            res.json({error:"Something went wrong"});
        }
    })

export default router;


