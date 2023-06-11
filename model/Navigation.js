const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const Navigation=seq.define('navigation',{
    pagename: {
        type: DataTypes.STRING(100)
    },
    url: {
        type: DataTypes.STRING(100)
    },
    icon: {
        type: DataTypes.STRING(100)
    },
    treeview: {
        type: DataTypes.INTEGER
    },
    parent: {
        type: DataTypes.INTEGER
    }, 
    orderby: {
        type: DataTypes.INTEGER
    },
    depth: {
        type: DataTypes.INTEGER
    }
})

module.exports ={Navigation}