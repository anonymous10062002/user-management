require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { seq } = require('./config/db');
const { userRoute } = require('./routes/userRoute');

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('HOMEPAGE');
})

app.use('/user',userRoute);

// Connecting to mysql before starting the server
seq.sync().then(()=>{
    app.listen(process.env.port,()=>{
        console.log(`Running at port: ${process.env.port}`);
    })
})
.catch((err)=>{
    console.log('eee',err);
})