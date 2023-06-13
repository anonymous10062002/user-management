
// const sms = {
//     id: '1', 
//     gateway_name: 'SMPP', 
//     api: 'http://182.18.143.11/api/mt/SendSMS?apikey=USERID&senderid=SENDERID&channel=TRANS&DCS=0&flashsms=0&number=MOBILE&text=MESSAGE&route=15&DLTTemplateId=TEMPLATE', 
//     user_id: 'xzj3uC95O0qk5MxB6tO1Gg', 
//     password: '', 
//     sender_id: 'TAPNPE', 
//     peid: '1201159205303408861', 
//     status: '1', 
//     date: '2022-05-05'
// }

// // # id, title, function, templateid, templates, status, doc
// // '2', 'Money Transfer Alert', 'transfer_remitter_alert', '1707168249984803203', 'Dear <remitter_name>, Rs <amount> Successfully Transfer to <recipient_name> Please Pay <fee> e-INV Click einv.tapnpe.com/<link>', '2', '2023-04-26 14:40:19'
// const bcrypt = require('bcrypt');
// bcrypt.hash('ashish',4,(err,hashed)=>{
//     console.log("FIRST",hashed)
// })
// bcrypt.hash('ashish',4,(err,hashed)=>{
//     console.log("SECOND",hashed)
// })

// userRoute.post('/signup',async(req,res)=>{
//     const {unique_id,branch_id,role,name,email,contact,password,coordinates,mac_id,admin_otp,wrong_attempts,status}=req.body;
//     try {
//         const hashed=bcrypt.hashSync(password,4)
//         connection.query(`insert into member (unique_id,branch_id,role,name,email,contact,password,coordinates,mac_id,admin_otp,wrong_attempts,admin_doc,status) values ('${unique_id}','${branch_id}','${role}','${name}','${email}','${contact}','${hashed}','${coordinates}','${mac_id}','${admin_otp}','${wrong_attempts}', NOW(), '${status}')`,(err,result)=>{
//             if(err){
//                 return res.send(err.message);
//             }
//             return res.send('signup_success')
//         })
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(400).json({err: 'Something went wrong!'});
//     }
// })