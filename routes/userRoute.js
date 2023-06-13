require('dotenv').config();
const express = require('express');
const userRoute=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {connection} = require('../config/db');
const {sendSMS} = require('../utils/sendSMS');

userRoute.post('/signup',async(req,res)=>{
    const {unique_id,branch_id,role,name,email,contact,password,coordinates,mac_id,admin_otp,wrong_attempts,status}=req.body;
    try {
        const hashed=bcrypt.hashSync(password,4)
        connection.query(`insert into member (unique_id,branch_id,role,name,email,contact,password,coordinates,mac_id,admin_otp,wrong_attempts,admin_doc,status) values ('${unique_id}','${branch_id}','${role}','${name}','${email}','${contact}','${hashed}','${coordinates}','${mac_id}','${admin_otp}','${wrong_attempts}', NOW(), '${status}')`,(err,result)=>{
            if(err){
                return res.send(err.message);
            }
            return res.send('signup_success')
        })
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({err: 'Something went wrong!'});
    }
})

userRoute.post('/login',async(req,res) => {
    const {contact,password,macID,coordinates}=req.body;
    try {
        if(!contact||!password||!macID||!coordinates){
            return res.json({err: 'Unauthorized access! Provide all details'});
        }
        connection.query(`select * from member where contact = '${contact}'`,async(err,result) => {
            if(err){
                res.sendStatus(400);
            }
            else{
                if(result.length){
                    bcrypt.compare(password,result[0].password,async(err,status)=>{
                        // console.log(password,status,result[0].password)
                        if(status){
                            if(macID!==result[0].mac_id){
                                // SEND OTP
                                let otp = await sendSMS(result[0].contact);
                                res.cookie('otp',otp,{expires: new Date(Date.now() + 600 * 1000)});
                                res.cookie('contact',contact,{expires: new Date(Date.now() + 600 * 1000)});
                                res.cookie('userID',result[0].id,{expires: new Date(Date.now() + 600 * 1000)});
                                res.status(202).json({msg: 'OTP sent successfully. Valid for 10 minutes only'});
                            }
                            else{
                                const token = jwt.sign({id:result[0].id},process.env.key);
                                res.status(200).json({msg:'Logged in successfully',token});
                            }
                        }
                        else{
                            res.status(403).json({err: 'Invalid password'});
                        }
                    });
                    
                }
                else{ 
                    res.status(404).json({err: 'No user found!'})
                }
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({err: 'Something went wrong!'});
    }
})

userRoute.post('/macID',async(req,res)=>{
    const {contact,otp,macID,coordinates}=req.body;
    if(!contact||!otp||!macID||!coordinates){
        return res.json({err: 'Unauthorized access! Provide all details'});
    }
    if(otp===req.cookies.otp&&contact===req.cookies.contact){
        connection.query(`UPDATE member SET mac_id = '${macID}', coordinates = '${coordinates}' WHERE contact = '${contact}'`,(err,data)=>{
            if(err){
                return res.status(404).json({err: 'Invalid contact number!'});
            }
            else{
                const token = jwt.sign({id:req.cookies.userID},process.env.key);
                res.status(200).json({msg:'Logged in successfully',token});
            }
        });
    }
    else{
        return res.status(402).json({err: 'Invalid otp or contact'});
    }   
})

module.exports ={userRoute}