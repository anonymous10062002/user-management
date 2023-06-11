require('dotenv').config();
const express = require('express');
const userRoute=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Member} = require('../model/Member');
userRoute.post('/login',async(req,res) => {
    const {mobile,password,macID,coordinates}=req.body;
    try {
        if(!mobile||!password||!macID||!coordinates){
            return res.json({err: 'Provide all details'});
        }
        const user = await Member.findOne({where: {mobile}});

        if(!user){
            return res.status(404).json({err: 'User not found'});
        }
        if(user.coordinates!==coordinates){
            return res.status(404).json({err: 'Invalid coordinates'});
        }
        if(user.mac_id!==macID){
            return res.status(404).json({err: 'Invalid mac_ID'});
        }

    } catch (error) {
        console.log(error.message);
        res.status(400).json({err: 'Something went wrong!'});
    }
})

module.exports ={userRoute}