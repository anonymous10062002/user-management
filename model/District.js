const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const District=seq.define('district',{
    dist_id: {
        type: DataTypes.INTEGER
    },
    district_name: {
        type: DataTypes.STRING
    },
    state_name: {
        type: DataTypes.STRING
    },
    state_id: {
        type: DataTypes.INTEGER
    }, 
    datex: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    }
})

module.exports ={District}