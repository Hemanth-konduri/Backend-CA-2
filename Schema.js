const express = require("express");
const { Schema } = require("mongoose");


const schema = new Schema({
    Username:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type: Number,
        required:false
    }
})

exports.module = schema;