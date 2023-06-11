const {DataTypes}=require('sequelize');
const seq=require('../config/db');

const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const Sms_template=seq.define('sms_template',{
    title: {
        type: DataTypes.STRING(100)
    }, 
    function: {
        type: DataTypes.STRING(100)
    },
    templateid: {
        type: DataTypes.STRING(100)
    },
    templates: {
        type: DataTypes.STRING(500)
    },
    status: {
        type: DataTypes.INTEGER
    },
    doc: {
        type: DataTypes.DATE(6)
    },
})

module.exports ={Sms_template}