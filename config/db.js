const Sequelize=require('sequelize');
require('dotenv').config();

const seq=new Sequelize(process.env.sqlDB, process.env.sqlUsername, process.env.sqlPass,{
    host:"localhost",
    dialect:"mysql",
    logging:false
})

module.exports={seq}