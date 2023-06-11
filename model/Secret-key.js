const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const {DataTypes}=require('sequelize');
const seq=require('../config/db');

const Secret_key=seq.define('secret_key',{
    secret_key: {
        type: DataTypes.STRING(50)
    },
    update: {
        type: DataTypes.DATE(6)
    },
    status: {
        type: DataTypes.ENUM('Active','Deactivate')
    }
})

module.exports ={Secret_key}