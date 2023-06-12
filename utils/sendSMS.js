const axios = require('axios');
const {connection} = require('../config/db');
const sendSMS = async(mobile)=>{
    let otp = Math.floor(1000 + Math.random() * 9000)
    const apiKey='xzj3uC95O0qk5MxB6tO1Gg'
    const text = `<%23> Your One Time Password (OTP) Is ${otp} tapNpe never asking for OTP. Dont share your OTP with anyone. Valid for VAR2`;
    const templateID = '1707168249984803203';
    const api = `http://182.18.143.11/api/mt/SendSMS?apikey=${apiKey}&senderid=TAPNPE&channel=TRANS&DCS=0&flashsms=0&number=${mobile}&text=${text}&route=15&DLTTemplateId=${templateID}`;

    try {
        const response = await axios.get(api,{method:'GET'});
        // console.log(response.data.MessageData[0]["$id"])
        if(response.data.MessageData){
            const query = `INSERT INTO smshistory ( message, mobile, msgstatus, messageurl, templateid, date) VALUES ( '${text}', '${mobile}', 'Done', '${api}', '${templateID}', CURRENT_TIMESTAMP)`;
            connection.query(query,(err,data)=>{
                if(err){
                    console.log(err.message);
                }
            })
            return otp;
        }
        else{
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports={sendSMS}