const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const State=seq.define('state',{
    state_id: {
        type: DataTypes.INTEGER
    },
    state_name: {
        type: DataTypes.STRING(50)
    },
    datex: {
        type: DataTypes.STRING(20)
    },
    status: {
        type: DataTypes.INTEGER
    },
})

module.exports ={State}