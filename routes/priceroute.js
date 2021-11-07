import  express  from "express";
import sequelize  from "sequelize";
import chalk from "chalk";
import fetch from "node-fetch";


import db from '../database/initializeDB.js';
 
const router=express.Router();

// router.route('/price')
// .get(async(req,res) =>{
//     try{
//         // const url='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
//         // const data=await fetch(data);
//         // const json = await data.json();
//         // console.log(json)
//         // res.json({data:data});
        
//         res.json({message:"touched /price with GET"});
// }
//     catch(err){
//         console.log(error);
//         res.json({error:"Something went wrong"});
//     }
//     })
//     .put((req,res) =>{
//         try{
//             res.json({message:"touched /price with PUT"});
//         }
//         catch(error){
//             console.log(error);
//             res.json({error:"Something went wrong"});
//         }
//     })
//     .post((req,res) =>{
//         try{
//             res.json({message:"touched /price with POST"});
        
//         }
//         catch(error){
//             console.log(error);
//             res.json({error:"Something went wrong"});
//         }
//     })
//     .delete((req,res) =>{
//         try{
//             res.json({message:"touched /price with DELETE"});
//         }
//         catch(error){
//             console.log(error);
//             res.json({error:"Something went wrong"});
//         }
//     })

import price_table from '../server/controllers/Price.js';
router.route('/price')
    .get(async(req,res) =>{
        try{
            const price=await db.Price.findall();
            const reply =halls.length>0?{data:halls}:{message:'no results found'}
            
            res.json(reply);
            }
        catch(err){
            console.log(error);
            res.json({error:"Something went wrong on /price at get"});
            }
    })
    .put(async(req,res) =>{
        try{
            await db.Price.update(
                {
                price_website=req.body.price_website,
                listed_price=req.body.listed_price
            },
            {
                where:{
                    price_id=req.body.price_id
                }
            }
            );
            res.send('Successfully Updated');
        }
        catch(error){
            console.log(error);
            res.json({error:"Something went wrong on /price at put"});
        }
    })
    .post(async(req,res) =>{
        const price=await db.Price.findall();
        const currentId=(await price.length)+1
        try{
        const newPrice= await db.price.create({
            price_id=currentId,
            price_website=req.body.price_website,
            listed_price=req.body.listed_price,
        });   
        
        }
        catch(error){
            console.log(error);
            res.json({error:"Something went wrong on /price at post"});
        }
    })
    .delete((req,res) =>{
        try{
            res.send('touched delete');
        }
        catch(error){
            console.log(error);
            res.json({error:"Something went wrong on /price at delete"});
        }
    })
export default router;


