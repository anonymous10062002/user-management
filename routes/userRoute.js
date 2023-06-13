require('dotenv').config();
const express = require('express');
const userRoute=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {connection} = require('../config/db');
const {sendSMS} = require('../utils/sendSMS');
let attempt=0;

userRoute.post('/login',async(req,res) => {
    const {contact,password,macID,coordinates}=req.body;
    try {
        if(!contact||!password||!macID||!coordinates){
            return res.json({err: 'Unauthorized access! Provide all details'});
        }
        connection.query(`select * from member where contact = '${contact}'`,async(err,result) => {
            if(err){
                res.status(404).json({err: 'User not found!'});
            }
            else{
                if(result.length){
                    if(result[0].status===1){
                        return res.status(402).json({err: 'Oops you are blocked!'});
                    }
                    bcrypt.compare(password,result[0].password,async(err,status)=>{
                        if(status){ 
                            if(macID!==result[0].mac_id){
                                // SEND OTP
                                let otp = await sendSMS(result[0].contact);
                                res.cookie('otp',otp,{expires: new Date(Date.now() + 600 * 1000)});
                                res.cookie('contact',contact,{expires: new Date(Date.now() + 600 * 1000)});
                                res.cookie('userID',result[0].id,{expires: new Date(Date.now() + 600 * 1000)});
                                return res.status(202).json({msg: 'OTP sent successfully. Valid for 10 minutes only'});
                            }
                            else{
                                const token = jwt.sign({id:result[0].id},process.env.key);
                                return res.status(200).json({msg:'Logged in successfully',token});
                            }
                        }
                        else{
                            attempt++;
                            connection.query(`update member SET wrong_attempts = wrong_attempts+${1} WHERE contact = '${contact}'`);
                            if(attempt===3){
                                connection.query(`update member SET status = ${1} WHERE contact = '${contact}'`);
                                return res.status(200).json({msg: 'You are blocked'});
                            }
                            else{
                                return res.status(403).json({err: `Invalid password! Only ${3-attempt} attempts left`});
                            } 
                        }
                    });  
                    
                }
                else{ 
                    return res.status(404).json({err: 'No user found!'})
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
                return res.status(200).json({msg:'Logged in successfully',token});
            }
        });
    }
    else{
        return res.status(402).json({err: 'Invalid otp or contact'});
    }   
})

module.exports ={userRoute}