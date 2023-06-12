require('dotenv').config();
const express = require('express');
const cookieParser=require('cookie-parser');
const cors = require('cors');
const { connection } = require('./config/db');
const { userRoute } = require('./routes/userRoute');

const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('HOMEPAGE');
})

app.use('/user',userRoute);

// Connecting to mysql before starting the server

app.listen(process.env.port,async(req,res)=>{
    try {
        await connection.connect((err)=>{
            if(err){
                console.log('Error connecting to server');
            }
            console.log('connected to mySql server');
        });
    } catch (error) {
        console.log(error);
    }
    console.log(`Running at port: ${process.env.port}`);
})