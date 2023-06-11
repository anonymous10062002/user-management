const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const Wallet=seq.define('wallet',{
    state_id: {
        type: DataTypes.INTEGER
    },
    pool: {
        type: DataTypes.DOUBLE(8,2) 
    },
    wallet: {
        type: DataTypes.DOUBLE(8,2) 
    },
    update: {
        type: DataTypes.DATE(6)
    },
    status: {
        type: DataTypes.ENUM('Enable','Disable')
    } 
})

module.exports ={Wallet}