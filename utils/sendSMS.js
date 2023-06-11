const axios = require('axios');

const sendSMS = async(mobile,userID,templateId)=>{
    const text = 'Your OTP is 1234'
    const api = `http://182.18.143.11/api/mt/SendSMS?apikey=${userID}&senderid=TAPNPE&channel=TRANS&DCS=0&flashsms=0&number=${mobile}&text=${text}&route=15&DLTTemplateId=${templateId}`;
    try {
        const response = await axios.get(api);
        console.log(response.data); 
    } catch (error) {
        console.error(error);
    }
}

sendSMS(8750716974,'123456','1707168249984803203');

module.exports={sendSMS}