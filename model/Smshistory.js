const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const {DataTypes}=require('sequelize');
const seq=require('../config/db');

const Sms_history=seq.define('sms_history',{
    message: {
        type: DataTypes.TEXT
    },
    mobile: {
        type: DataTypes.STRING(20)
    },
    errorcode: {
        type: DataTypes.STRING(100)
    },
    msgstatus: {
        type: DataTypes.STRING(100)
    } ,
    messageurl: {
        type: DataTypes.TEXT
    },
    templateid: {
        type: DataTypes.STRING(100)
    },
    errormsg: {
        type: DataTypes.STRING(1000)
    },
    response: {
        type: DataTypes.TEXT
    },
    date: {
        type: DataTypes.STRING(20)
    }
})

module.exports ={Sms_history}