const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const {DataTypes}=require('sequelize');
const seq=require('../config/db');

const Sms_gateway=seq.define('sms_gateway',{
    gateway_name: {
        type: DataTypes.STRING(100)
    },
    api: {
        type: DataTypes.STRING(1000)
    },
    user_id: {
        type: DataTypes.STRING(100)
    },
    password: {
        type: DataTypes.STRING(100)
    }, 
    sender_id: {
        type: DataTypes.STRING(6)
    },
    peid: {
        type: DataTypes.STRING(100)
    }, 
    status: {
        type: DataTypes.BIGINT
    },
    date: {
        type: DataTypes.DATEONLY
    },
})

module.exports ={Sms_gateway}