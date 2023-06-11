const {DataTypes}=require('sequelize');
const {seq}=require('../config/db');

const Member=seq.define('member',{
unique_id: {
    type: DataTypes.STRING(100)
},
accountid: {
    type: DataTypes.INTEGER
}, 
role: {
    type: DataTypes.ENUM('Director','Technical')
},
name: {
    type: DataTypes.STRING(100)
},
email: {
    type: DataTypes.STRING(100)
},
contact: {
    type: DataTypes.STRING(100)
},
password: {
    type: DataTypes.STRING(50)
},
mac_id: {
    type: DataTypes.STRING(100)
},
admin_otp: {
    type: DataTypes.STRING(50)
},
wrong_attempts: {
    type: DataTypes.BIGINT
},
admin_doc: {
    type: DataTypes.DATE(6)
},
status: {
    type: DataTypes.BIGINT
}
})

module.exports ={Member}