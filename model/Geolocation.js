const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const Geolocation=seq.define('geolocation',{
    coordinates: {
        type: DataTypes.STRING(1225)
    },
    latitude: {
        type: DataTypes.STRING(1000)
    },
    longitude: {
        type: DataTypes.STRING(1000)
    },
    address: {
        type: DataTypes.STRING(10000)
    },
    area: {
        type: DataTypes.STRING(1000)
    },
    district: {
        type: DataTypes.STRING(1000)
    },
    pincode: {
        type: DataTypes.STRING(100)
    },
    state: {
        type: DataTypes.STRING(1000)
    },
    response: {
        type: DataTypes.TEXT
    },
})

module.exports ={Geolocation}