const express = require("express");
const app = express();
const schema = require("./Schema");
const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", ()=>{
    try{
        console.log("Connected successfully");

    }catch(error){
        console.log("Something went wrong");
    }

})

app.get("/userDetails", (req, res)=>{
    try{
       const {Username} = req.body;
       if(!Username){
        return res.status(500).send({message:"Username cannot be empty"})
       }
       const {Email} = req.body;
       if(!Email){
        return res.status(500).send({message:"Email cannot be empty"})
       }
       const {Password}= req.body;
       if(Password<8 && Password>=16){
        return res.status(200).send({message:" Username and Email added successfully"})
       }else{
        return res.status(500).send({message:"Password length should be greater than 8 or less than or equal to 16"})
       }
        
    }catch(error){
        return res.status(500).send({message:"Something went wrong"})

    }
})

app.listen(8080, ()=>{
    try{
        console.log("Connected successfully")
    }catch(error){
        console.log("something went wrong")
    }

})