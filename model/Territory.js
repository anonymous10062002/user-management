const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const Territory=seq.define('territory',{
    territory_name: {
        type: DataTypes.STRING(10000)
    },
    district_id: {
        type: DataTypes.STRING(50)
    }, 
    state_id: {
        type: DataTypes.STRING(50)
    }, 
    pincode: {
        type: DataTypes.STRING(50)
    }, 
    status: {
        type: DataTypes.INTEGER
    },
})

module.exports ={Territory}