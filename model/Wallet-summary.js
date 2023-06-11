const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const Wallet_summary=seq.define('wallet_summary',{
    tran_id: {
        type: DataTypes.BIGINT
    },
    unique_id: {
        type: DataTypes.STRING(118)
    },
    ac_typ: {
        type: DataTypes.ENUM('Pool','Wallet')
    },
    type: {
        type: DataTypes.ENUM('CR','DR')
    },
    amount: {
        type: DataTypes.DOUBLE(8,2) 
    },
    description: {
        type: DataTypes.STRING(225) 
    },
    clo_bal: {
        type: DataTypes.DOUBLE(8,2) 
    }, 
    status:{
        type: DataTypes.ENUM('Success','Failed','Pending')
    },
    tran_date: {
        type: DataTypes.DATE(6) 
    },
})

module.exports ={Wallet_summary}